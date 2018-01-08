#!/bin/bash
#
# Deploy to Azure Webapp service.
#
# Debugging notes.
#   To capture and stream console ouput, add the follow two lines to the iisnode.yml file in the
#   Webapp wwwroot directory.
#     loggingEnabled: true
#     devErrorsEnabled: true
#
#   ... and use the following command to stream the output.
#
#     az webapp log tail --name ozautogate2 --resource-group ozautogate
#
webappname='ozautogate'
resourcegroup='ozautogate'
zipname='dist.zip'

rm -f dist/${zipname} > /dev/null

echo '----> Installing npm dependencies...'
if ! (cd dist && npm install); then
    echo 'Failed to install dist npm package dependencies'
    exit 1
fi

echo '----> Zipping the dist directory...'
if ! (cd dist && zip -q -r ${zipname} .); then
    echo 'Failed to zip the dist directory'
    exit 1
fi

echo "----> Deploying the distribution to the ${webappname} Webapp..."
if ! az webapp deployment source config-zip \
       --resource-group ${resourcegroup} \
       --name ${webappname} --src dist/${zipname}; then
    echo 'Failed to deploy app'
    exit 1
fi

echo '----> Cleaning up...'
rm -f dist/${zipname}

echo "Done."
