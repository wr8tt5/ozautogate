#!/bin/bash
webappname='ozautogate'
resourcegroup='ozautogate'

creds=($(az webapp deployment list-publishing-profiles --name ${webappname} --resource-group ${resourcegroup} \
--query "[?contains(publishMethod, 'FTP')].[publishUrl,userName,userPWD]" --output tsv))
echo ${creds[0]} ${creds[1]} ${creds[2]}

cd dist
find . -type f -exec curl -T {} -u ${creds[1]}:${creds[2]} ${creds[0]}/{} --ftp-create-dirs \; -print
