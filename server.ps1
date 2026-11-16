$port = 8080
$url = "http://localhost:$port/"
$baseDir = Get-Location

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)

try {
    $listener.Start()
    Write-Host "=========================================================="
    Write-Host " Naina Technologies - Mobile App Development Server"
    Write-Host " Serving at: $url"
    Write-Host "=========================================================="

    $mimeTypes = @{
        ".html" = "text/html; charset=utf-8"
        ".css"  = "text/css; charset=utf-8"
        ".js"   = "application/javascript; charset=utf-8"
        ".json" = "application/json"
        ".png"  = "image/png"
        ".jpg"  = "image/jpeg"
        ".jpeg" = "image/jpeg"
        ".gif"  = "image/gif"
        ".svg"  = "image/svg+xml"
        ".ico"  = "image/x-icon"
        ".woff" = "font/woff"
        ".woff2"= "font/woff2"
        ".ttf"  = "font/ttf"
    }

    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $rawPath = $request.Url.LocalPath.TrimStart('/')
            if ([string]::IsNullOrWhiteSpace($rawPath) -or $rawPath -eq "/") {
                $rawPath = "index.html"
            }

            $filePath = Join-Path $baseDir $rawPath.Replace('/', '\')

            if (Test-Path $filePath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }

                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentType = $contentType
                $response.ContentLength64 = $bytes.Length
                $response.StatusCode = 200

                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
            } else {
                $response.StatusCode = 404
                $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                $response.ContentType = "text/plain"
                $response.ContentLength64 = $errBytes.Length
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
                }
            }

            $response.Close()
        } catch {
            # Catch transient request errors without stopping the server
        }
    }
} catch {
    Write-Host "Server Error: $_"
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
    $listener.Close()
}
