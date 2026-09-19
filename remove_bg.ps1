$csharpCode = @"
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public class BackgroundRemover
{
    private static bool IsBgColor(byte b, byte g, byte r)
    {
        int avg = (r + g + b) / 3;
        int maxDiff = Math.Max(Math.Abs(r - g), Math.Max(Math.Abs(r - b), Math.Abs(g - b)));
        return (avg >= 230 && maxDiff <= 28) || (avg >= 244);
    }

    public static void ProcessImage(string inputPath, string outputPath)
    {
        using (Bitmap src = new Bitmap(inputPath))
        {
            int w = src.Width;
            int h = src.Height;
            using (Bitmap dst = new Bitmap(w, h, PixelFormat.Format32bppArgb))
            {
                BitmapData srcData = src.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
                BitmapData dstData = dst.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);

                int stride = srcData.Stride;
                byte[] srcBytes = new byte[stride * h];
                byte[] dstBytes = new byte[stride * h];
                Marshal.Copy(srcData.Scan0, srcBytes, 0, srcBytes.Length);
                Array.Copy(srcBytes, dstBytes, srcBytes.Length);

                bool[] isBg = new bool[w * h];
                Queue<int> q = new Queue<int>();

                // Seed top and bottom borders
                for (int x = 0; x < w; x++)
                {
                    int topIdx = x;
                    int botIdx = (h - 1) * w + x;
                    int topByte = topIdx * 4;
                    int botByte = botIdx * 4;

                    if (IsBgColor(srcBytes[topByte], srcBytes[topByte + 1], srcBytes[topByte + 2]))
                    {
                        isBg[topIdx] = true;
                        q.Enqueue(topIdx);
                    }
                    if (IsBgColor(srcBytes[botByte], srcBytes[botByte + 1], srcBytes[botByte + 2]))
                    {
                        isBg[botIdx] = true;
                        q.Enqueue(botIdx);
                    }
                }

                // Seed left and right borders
                for (int y = 0; y < h; y++)
                {
                    int leftIdx = y * w;
                    int rightIdx = y * w + (w - 1);
                    int leftByte = leftIdx * 4;
                    int rightByte = rightIdx * 4;

                    if (!isBg[leftIdx] && IsBgColor(srcBytes[leftByte], srcBytes[leftByte + 1], srcBytes[leftByte + 2]))
                    {
                        isBg[leftIdx] = true;
                        q.Enqueue(leftIdx);
                    }
                    if (!isBg[rightIdx] && IsBgColor(srcBytes[rightByte], srcBytes[rightByte + 1], srcBytes[rightByte + 2]))
                    {
                        isBg[rightIdx] = true;
                        q.Enqueue(rightIdx);
                    }
                }

                int[] dx = new int[] { 1, -1, 0, 0, 1, 1, -1, -1 };
                int[] dy = new int[] { 0, 0, 1, -1, 1, -1, 1, -1 };

                // 8-way BFS flood fill from edges inward
                while (q.Count > 0)
                {
                    int curr = q.Dequeue();
                    int cx = curr % w;
                    int cy = curr / w;

                    for (int i = 0; i < 8; i++)
                    {
                        int nx = cx + dx[i];
                        int ny = cy + dy[i];

                        if (nx >= 0 && nx < w && ny >= 0 && ny < h)
                        {
                            int nIdx = ny * w + nx;
                            if (!isBg[nIdx])
                            {
                                int nByte = nIdx * 4;
                                if (IsBgColor(srcBytes[nByte], srcBytes[nByte + 1], srcBytes[nByte + 2]))
                                {
                                    isBg[nIdx] = true;
                                    q.Enqueue(nIdx);
                                }
                            }
                        }
                    }
                }

                // Mark background transparent
                for (int i = 0; i < w * h; i++)
                {
                    if (isBg[i])
                    {
                        dstBytes[i * 4 + 3] = 0; // Alpha = 0
                    }
                }

                // Anti-aliased feathering on the boundary
                for (int y = 1; y < h - 1; y++)
                {
                    for (int x = 1; x < w - 1; x++)
                    {
                        int idx = y * w + x;
                        if (!isBg[idx])
                        {
                            bool nearBg = isBg[idx - 1] || isBg[idx + 1] || isBg[idx - w] || isBg[idx + w];
                            if (nearBg)
                            {
                                int bIdx = idx * 4;
                                byte b = srcBytes[bIdx];
                                byte g = srcBytes[bIdx + 1];
                                byte r = srcBytes[bIdx + 2];
                                int avg = (r + g + b) / 3;
                                if (avg >= 210)
                                {
                                    double t = (245.0 - avg) / (245.0 - 210.0);
                                    if (t < 0) t = 0;
                                    if (t > 1) t = 1;
                                    byte alpha = (byte)(t * 255);
                                    if (alpha < dstBytes[bIdx + 3])
                                    {
                                        dstBytes[bIdx + 3] = alpha;
                                    }
                                }
                            }
                        }
                    }
                }

                Marshal.Copy(dstBytes, 0, dstData.Scan0, dstBytes.Length);
                src.UnlockBits(srcData);
                dst.UnlockBits(dstData);

                dst.Save(outputPath, ImageFormat.Png);
            }
        }
    }
}
"@

Add-Type -TypeDefinition $csharpCode -ReferencedAssemblies "System", "System.Drawing"

$baseDir = Get-Location
$publicRmDir = Join-Path $baseDir "public\rm-service"
$rootRmDir = Join-Path $baseDir "rm-service"

if (!(Test-Path $publicRmDir)) { New-Item -ItemType Directory -Path $publicRmDir -Force | Out-Null }
if (!(Test-Path $rootRmDir)) { New-Item -ItemType Directory -Path $rootRmDir -Force | Out-Null }

$services = @(
    "service-custom-software",
    "service-custom-erp",
    "service-ai-automation",
    "service-process-automation",
    "service-api-integration",
    "service-saas-development"
)

foreach ($svc in $services) {
    $inputPath = Join-Path $baseDir "public\services\$svc.jpg"
    $outPublicPng = Join-Path $publicRmDir "$svc.png"
    $outRootPng = Join-Path $rootRmDir "$svc.png"
    
    if (Test-Path $inputPath) {
        Write-Host "Processing $svc..."
        [BackgroundRemover]::ProcessImage($inputPath, $outPublicPng)
        Copy-Item $outPublicPng $outRootPng -Force
        Write-Host "Saved transparent PNG to $outPublicPng and $outRootPng"
    } else {
        Write-Warning "File not found: $inputPath"
    }
}

Write-Host "All background removals complete!"
