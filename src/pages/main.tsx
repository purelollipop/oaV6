import React, {useEffect} from 'react';
import {NavigateFunction, NavLink, Outlet, useLocation, useNavigate} from "react-router-dom";
import { Layout, Menu,Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    CaretLeftOutlined,
    CaretRightOutlined
} from '@ant-design/icons';
import "@/pages/main/main.css"
const { Header, Sider, Content } = Layout;


interface props {
    navigate: NavigateFunction
}
interface state {
    routeData:Record<string, any>[],
    headScrollData:Record<string, any>[],
    [k : string]:any
}
class MainPage extends React.Component<props, state> {
    constructor(props:props) {
        super(props);
        this.state = {
            routeData:[],
            headScrollData:[],
            collapsed: false,
            leftMove:false,
            rightMove:false,
            navigate:props.navigate
        };
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    goPageFUn = (data:string):void =>{
        this.state.navigate(data)
    }
    exiteFun = ():void => {
        window.sessionStorage.setItem('token','');
        window.sessionStorage.setItem('first','1');
        this.state.navigate('/login')
    }
    leftMoveFun = (flag:number) => {
        return ()=>{
            this.leftMoveC3(flag)
            this.setState({
                leftMove:true
            },()=>{
                let a = setInterval(()=>{
                    if(this.state.leftMove){
                        this.leftMoveC3(flag)
                    }else{
                        clearInterval(a)
                    }
                },100)
            })
        }
    }
    breakLeftMoveFun = ():void => {
        this.setState({
            leftMove:false
        })
    }
    leftMoveC3 = (flag:number):void => {
        let scrollDiv = document.getElementsByClassName('scrollDiv') as HTMLCollectionOf<HTMLElement>
        let scrollDiv2 = document.querySelector('.scrollCla>:nth-child(2)') as HTMLElement
        let offLe:any = scrollDiv[0].offsetLeft
        // console.log(scrollDiv[0].offsetWidth)
        // console.log(scrollDiv2.offsetWidth)
        // console.log(scrollDiv[0].offsetWidth - scrollDiv2.offsetWidth)
        // console.log(Math.abs(offLe))
        if (flag){
            offLe -= 50
        } else {
            offLe += 50
        }
        if(offLe>=50){
            offLe = 0
        } else if((scrollDiv[0].offsetWidth - scrollDiv2.offsetWidth) < (Math.abs(offLe)-30)) {
            offLe = -(scrollDiv[0].offsetWidth - scrollDiv2.offsetWidth)
        }
        scrollDiv[0].style.left = `${offLe}px`
    }

    render() {
        return (
            <div>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                <NavLink className={({isActive }):string=>{
                                    return isActive  ? 'activeCla':''
                                }} to={`/PageA`}>PageA</NavLink>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                                <div className="activeCla">123123</div>
                                <NavLink className="activeCla" to={`/PageB`}>PageB</NavLink>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UploadOutlined />}>
                     <NavLink style={({ isActive }) => {
                        return {
                            display: "block",
                            margin: "1rem 0",
                            color: isActive ? "red" : "",
                        };
                    }} to={`/PageC`}>PageC</NavLink>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                        </Header>
                        <div>
                            <div className="scrollCla">
                                <div className="leftScrollCla" onMouseDown={this.leftMoveFun(1)} onMouseUp={this.breakLeftMoveFun}><CaretLeftOutlined /></div>
                                <div>
                                    <div className="scrollDiv">
                                        {
                                            this.state.headScrollData.map((ele)=>{
                                                return<NavLink  to={ele.to} key={ele.to}>{ele.name}</NavLink>
                                            })
                                        }
                                    </div>
                                </div>
                                <div onMouseDown={this.leftMoveFun(0)} onMouseUp={this.breakLeftMoveFun}><CaretRightOutlined /></div>
                            </div>
                        </div>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                            }}
                        >
                            <Outlet />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}
// function Main ():JSX.Element | null{
//     let navigate = useNavigate();
//     useEffect(()=>{
//         if (!window.sessionStorage.getItem('token')){
//             navigate('/login')
//         }
//     },[])
//     // let navigate = useNavigate();
//     const clickFunA = ()=>{
//         navigate('/PageA')
//     }
//     const exitFun = ()=>{
//         window.sessionStorage.setItem('token','')
//         console.log(window.sessionStorage)
//         navigate('/login')
//     }
//     if (!window.sessionStorage.getItem('token')){
//         return null
//     } else {
//         return (<div style={{display:'flex',flexFlow:'nowrap'}}>
//             <div>
//                 <nav>
//                     <NavLink style={({ isActive }) => {
//                         return {
//                             display: "block",
//                             margin: "1rem 0",
//                             color: isActive ? "red" : "",
//                         };
//                     }} to={`/PageA`}>PageA</NavLink>
//                 </nav>
//                 <nav>
//                     <NavLink style={({ isActive }) => {
//                         return {
//                             display: "block",
//                             margin: "1rem 0",
//                             color: isActive ? "red" : "",
//                         };
//                     }} to={`/PageB`}>PageB</NavLink>
//                 </nav>
//                 <nav>
//                     <NavLink style={({ isActive }) => {
//                         return {
//                             display: "block",
//                             margin: "1rem 0",
//                             color: isActive ? "red" : "",
//                         };
//                     }} to={`/PageC`}>PageC</NavLink>
//                 </nav>
//                 <button onClick={clickFunA}>pageA</button>
//             </div>
//             <button onClick={exitFun}>退出</button>
//             <div style={{border:'1px solid black',padding:'20px'}}>
//                 <Outlet />
//             </div>
//         </div>);
//     }
// };

// export default Main

function Main() {
    let navigate = useNavigate();
    return <MainPage  navigate={navigate} />
}

export default Main

