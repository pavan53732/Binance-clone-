$ProgressPreference = 'SilentlyContinue'
Write-Output "Fetching release URL..."
$url = (Invoke-RestMethod -Uri "https://api.github.com/repos/MustardChef/WSABuilds/releases/latest").assets | Where-Object { $_.name -match 'x64' -and $_.name -match 'MindTheGapps' -and $_.name -match 'RemovedAmazon' } | Select-Object -First 1 | ForEach-Object { $_.browser_download_url }
Write-Output "Downloading from: $url"
Invoke-WebRequest -Uri $url -OutFile "C:\WSA\wsa_package.7z"
Write-Output "Download Complete. Extracting..."
New-Item -ItemType Directory -Force -Path "C:\WSA\extracted"
& "C:\Program Files\7-Zip\7z.exe" x "C:\WSA\wsa_package.7z" -o"C:\WSA\extracted" -y
Write-Output "Extraction Complete. Locating Run.bat or Install.ps1..."
$runBat = Get-ChildItem -Path "C:\WSA\extracted" -Filter "Run.bat" -Recurse | Select-Object -First 1
if ($runBat) {
    Write-Output "Found installer at: $($runBat.FullName)"
    Write-Output "Starting installation. Please check your screen for a UAC prompt."
    Start-Process -FilePath "cmd.exe" -ArgumentList "/c `"$($runBat.FullName)`"" -Verb RunAs -Wait
    Write-Output "Installation finished."
}
else {
    Write-Output "Could not find Run.bat"
}
