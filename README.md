# Rescue Shelter Test Project


[@import SyntaxError:](https://stackoverflow.com/questions/54976344/jest-fails-when-css-uses-import)


## [IMAGE:PNG] SyntaxError: Invalid or unexpected token

```
/home/kkscott/apps/nodeapps/rescueshelter/RescueShelter.Test/node_modules/rescueshelter/src/images/home.png:1  
({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){�PNG  
                                                                                              
  
SyntaxError: Invalid or unexpected token  
  
    at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:537:17)  
    at ScriptTransformer.transform (node_modules/@jest/transform/build/ScriptTransformer.js:579:25)  
    at Object.<anonymous> (node_modules/rescueshelter/src/components/shared/navroutes.tsx:6:1)  
```

### [IMAGE:PNG] Resolution [webpackjs](https://webpack.js.org/guides/asset-management/#loading-images)
Update the jest.config.js or package.json jest schema with moduleNameMapper.
```
moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "\\.(png|svg|jpg|gif)$": "file-loader"
  }
```