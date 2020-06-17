<!--
 * @Author: 夏民喜
 * @Date: 2020-05-22 16:51:33
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-05-22 17:34:21
 * @Description: 项目说明文件
 * @FilePath: \react-admin\README.MD
--> 

## 安装依赖

    yarn install

## 启动 

    yarn dev   开发环境

    yarn test  测试环境

    yarn prod  生产环境

## 打包

    yarn build:dev   开发环境

    yarn build:test  测试环境

    yarn build:prod  生产环境

## 目录结构

    ├── .vscode                  
    |    └── setting.json                   # 编辑器配置文件
    ├── mock                                # 本地模拟数据
    ├── public
    │   └── favicon.ico                     # Favicon
    ├── src
    │   ├── congfig                         # 常用配置
    │   ├── layouts                         # 布局
    │   ├── models                          # 数据流
    │   ├── pages                           # 页面
    │   ├── redux                           # 数据
    │   ├── routes                          # 路由
    │   ├── server                          # http 微服务
    │   ├── themes                          # 主题文件
    │   ├── utils                           # 工具箱
    │   └── index.html                      # html模板文件
    ├── webpack                             # webpack构建文件
    ├── package.json                        # 包管理文件
    ├── README.md                           # 项目说明文件
    └── yarn.lock                           # 包管理文件
