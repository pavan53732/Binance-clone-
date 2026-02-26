New-Item -ItemType Directory -Force -Path "C:\WSA"
$release = Invoke-RestMethod -Uri "https://api.github.com/repos/MustardChef/WSABuilds/releases/latest"
$asset = $release.assets | Where-Object { $_.name -match "x64" -and $_.name -match "MindTheGapps" -and $_.name -match "RemovedAmazon" } | Select-Object -First 1
$url = $asset.browser_download_url
Write-Output "Downloading WSA from: $($url)"
Invoke-WebRequest -Uri $url -OutFile "C:\WSA\wsa_package.7z"
Write-Output "Download Complete."
