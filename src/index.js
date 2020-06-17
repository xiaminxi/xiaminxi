/*
 * @Author: 夏民喜
 * @Date: 2020-05-22 17:38:31
 * @LastEditors: 夏民喜
 * @LastEditTime: 2020-06-17 11:17:14
 * @Description: 请输入文件说明
 * @FilePath: \react-admin\src\index.js
 */
import React, { Component } from 'react'
import ReactDOM from "react-dom"
import PropTypes from 'prop-types'
import { Button, Progress, Row, Col, Tooltip } from 'antd'
import { colorList, changeTheme } from './themes/theme'


function Cao(props) {
    const list = [
        {
            title: "React",
            percent: 80,
            color: "#63F0FD"
        }
    ]

    changeTheme(localStorage.getItem("theme")|| "#000")


    return (
        <div>
            <Button type="primary" >去玩儿</Button>
            <Row>
                <Col span={4}>
                    {list.map(item => <Progress strokeColor={item.color} percent={item.percent} showInfo={false} />)}
                </Col>
                <Col span={16}>
                    <div style={{ textAlign: "center" }} >
                        {
                            colorList.map(item => <Tooltip title={item.title} key={item.key}>
                                <div style={{ backgroundColor: item.key, width: 22, height: 22, borderRadius: 4, margin: "20px 10px", display: "inline-block" }} onClick={() => changeTheme(item.key)} ></div>
                            </Tooltip>)
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}

Cao.propTypes = {

}

export default Cao



ReactDOM.render(<Cao />, document.getElementById("root"))