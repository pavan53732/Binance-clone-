$ErrorActionPreference = "Continue"

$files = git status --porcelain | ForEach-Object {
    if ($_.Length -ge 4) {
        $path = $_.Substring(3)
        if ($path.StartsWith('"') -and $path.EndsWith('"')) {
            $path = $path.Substring(1, $path.Length - 2)
        }
        $path
    }
}

if (-not $files) {
    Write-Host "No files to commit."
    exit 0
}

$fileArray = @($files)
$batchSize = 500
$totalBatches = [math]::Ceiling($fileArray.Count / $batchSize)

Write-Host "Found $($fileArray.Count) files to push. Splitting into $totalBatches batches."

for ($i = 0; $i -lt $totalBatches; $i++) {
    Write-Host ("Processing batch " + ($i + 1) + " of " + $totalBatches + "...")
    $batch = $fileArray | Select-Object -Skip ($i * $batchSize) -First $batchSize
    
    foreach ($file in $batch) {
        git add $file
    }
    
    $commitMsg = "chore: sync files batch $( $i + 1 ) of $totalBatches"
    git commit -m $commitMsg
    git push origin main
}

Write-Host "All batches synced and pushed successfully!"
