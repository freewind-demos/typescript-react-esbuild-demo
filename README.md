TypeScript React EsBuild Demo
=================================

可以在webpack中通过插件使用esbuild来编译ts，速度很更快。

有两点需要注意：
1. esbuild最低只支持es6（不支持es5，不支持IE11）
2. 不进行typing检查，所以需要另外使用`tsc --noEmit`等进行类型检查。可以把`skipLibCheck`设为true加快检查

```
npm install
npm run demo
```

It will open page on browser automatically.
