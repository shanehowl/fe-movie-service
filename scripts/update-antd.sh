#!/usr/bin/bash

# Install 'less' globally if it does not exist.
package='less'
if [ `npm list -g | grep -c $package` -eq 0 ]; then
    npm install -g $package
fi

# Convert overwritten Ant Design style to css
lessc ./src/styles/overwrites/variables.less ./src/styles/overwrites/antd.css --js