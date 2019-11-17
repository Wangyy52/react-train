import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
// import InfiniteScroll from 'react-infinite-scroller'
import icon from './img/battle-one.svg'

// import './css/loading.min.css'
class Navbar extends React.Component {
    render() {
        return <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <ul style={{display: 'flex', fontWeight: '700'}}>
                <li style={{paddingRight: '10px', cursor: 'pointer', color: 'rgb(187, 46, 31)'}}>Popular</li>
                <li style={{cursor: 'pointer'}}>Battle</li>
            </ul>
            <button style={{border: 'none', background: 'transparent', fontSize: '30px'}}>🔦</button>
        </div>
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {url: ' https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories '}
    }
    handelAll=()=>{
        this.setState(state=>({
            url:'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories'
        }))
        console.log("all")
    }
    handelJavaScript=()=>{
        this.setState(state=>({
                url:'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories '
            })
        )
        console.log("javaScript",this.state.url)
    }
    handelRuby=()=>{
        this.setState(state=>({
            url:'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories '
        }))
    }
    handelCSS=()=>{
        this.setState(state=>({
            url:'https://api.github.com/search/repositories?q=stars: %3E1+language:css&sort=stars&order=desc&type=Repositories '
        }))
    }
    handelPython=()=>{
        this.setState(state=>({
            url:'https://api.github.com/search/repositories?q=stars: %3E1+language:java&sort=stars&order=desc&type=Repositories '
        }))
    }
    render() {
        return <ul style={{display: 'flex', justifyContent: 'center'}}>
            <li>
                <button style={{
                    color: 'red',
                    padding: '1px 6px',
                    backgroundColor: '#fff',
                    fontWeight: '700',
                    fontSize: '18px',
                    border: '0'
                }} onClick={this.handelAll}>All
                </button>
            </li>
            <li>
                <button style={{
                    padding: '1px 6px',
                    backgroundColor: '#fff',
                    fontWeight: '700',
                    fontSize: '18px',
                    border: '0'
                }} onClick={this.handelJavaScript}>JavaScript
                </button>
            </li>
            <li>
                <button
                    style={{
                        padding: '1px 6px',
                        backgroundColor: '#fff',
                        fontWeight: '700',
                        fontSize: '18px',
                        border: '0'
                    }} onClick={this.handelRuby}>Ruby
                </button>
            </li>
            <li>
                <button style={{
                    padding: '1px 6px',
                    backgroundColor: '#fff',
                    fontWeight: '700',
                    fontSize: '18px',
                    border: '0'
                }} onClick={this.handelCSS}>CSS
                </button>
            </li>
            <li>
                <button
                    style={{
                        padding: '1px 6px',
                        backgroundColor: '#fff',
                        fontWeight: '700',
                        fontSize: '18px',
                        border: '0'
                    }} onClick={this.handelPython}>Python
                </button>
            </li>
        </ul>
    }
}

class Card extends React.Component {
    render() {
        const list = this.props.arr.map((item, key) => <div style={{
            width: '250px',
            padding: '20px',
            backgroundColor: '#ebebeb',
            textAlign: 'center',
            margin: '10px 0'
        }}>
            <h3>#{key + 1}</h3>
            <img src={item.owner.avatar_url} alt={item.owner.login}
                 style={{width: '150px', height: '150px', margin: '0 auto'}}/>
            <h2 style={{fontSize: '1.5em', lineHeight: '40px', fontWeight: 'bold'}}><a href="#"
                                                                                       style={{color: 'deeppink'}}>{item.owner.login}</a>
            </h2>
            <ul style={{textAlign: 'left', lineHeight: '35px'}}>
                <li><i className="fa fa-user" aria-hidden="true" style={{
                    fontSize: '23px',
                    color: '#ffc06d',
                    width: '42px',
                    height: '25px',
                    textAlign: 'center'
                }}></i><a href="#" style={{color: '#333'}}>{item.owner.login}</a></li>
                <li><i className="fa fa-star" aria-hidden="true" style={{
                    fontSize: '23px',
                    color: '#ffd900',
                    width: '42px',
                    height: '25px',
                    textAlign: 'center'
                }}></i><a href="#" style={{color: '#333'}}>{item.stargazers_count} stars</a></li>
                <li><i className="fa fa-code-fork" aria-hidden="true" style={{
                    fontSize: '23px',
                    color: '#91c9f5',
                    width: '42px',
                    height: '25px',
                    textAlign: 'center'
                }}></i><a href="#" style={{color: '#333'}}>{item.forks_count} forks</a></li>
                <li><i className="fa fa-exclamation-triangle" aria-hidden="true" style={{
                    fontSize: '23px',
                    color: '#f38991',
                    width: '42px',
                    height: '25px',
                    textAlign: 'center'
                }}></i><a href="#" style={{color: '#333'}}>{item.open_issues_count} open issues</a></li>
            </ul>
        </div>)
        return <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>{list}</div>
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {arr: []}
    }

    async componentDidMount() {
        const res = await axios.get(' https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories ')
        // console.log(res.data.items)
        this.setState({
            arr: res.data.items
        })
    }

    render() {
        return <div>
            <Header />
            <Card arr={this.state.arr}/>
        </div>
    }
}

class BattleHeader extends React.Component {
    render() {
        return <div style={{textAlign: 'center', fontSize: '30px', margin: '20px'}}>
            <h2 style={{fontWeight: 'normal'}}>Instructions</h2>
        </div>
    }
}

class BattleContent extends React.Component {
    render() {
        return <div style={{display: 'flex', justifyContent: 'space-between', textAlign: 'center'}}>
            <div style={{marign: '100px 0'}}>
                <h3 style={{fontWeight: 'normal', fontSize: '28px', margin: '10px'}}>Enter two Github users</h3>
                <div><img style={{width: '140px'}} src={icon} alt=""/></div>
            </div>
            <div>
                <h3 style={{fontWeight: 'normal', fontSize: '28px', margin: '10px'}}>Battle</h3>
                <div><img style={{width: '140px'}} src={icon} alt=""/></div>
            </div>
            <div>
                <h3 style={{fontWeight: 'normal', fontSize: '28px', margin: '10px'}}>See the winner</h3>
                <div><img style={{width: '140px'}} src={icon} alt=""/></div>
            </div>
        </div>
    }
}

class BattleFooter extends React.Component {
    render() {
        return <div>
            <div style={{textAlign: 'center', fontSize: '30px', margin: '100px 0'}}>
                <h2 style={{fontWeight: 'normal', margin: '20px'}}>Players</h2></div>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px'}}>
                <div style={{width: '50%'}}>
                    <p>Player One</p>
                    <input style={{
                        fontSize: '20px',
                        margin: '5px 0',
                        boxShadow: '0px 0px 10px #fafbfa inset',
                        lineHeight: '35px',
                        width: '65%'
                    }} type="text" placeholder="github username"/>
                    <input style={{
                        background: '#f2f2f2',
                        color: '#c7c7c7',
                        marginLeft: '10px',
                        fontSize: '20px',
                        lineHeight: '35px',
                        padding: '0 35px',
                        border: '0',
                        borderRadius: '5px'
                    }} type="button" value="SUBMIT"/>
                </div>
                <div style={{width: '50%'}}>
                    <p>Player Two</p>
                    <input style={{
                        fontSize: '20px',
                        margin: '5px 0',
                        boxShadow: '0px 0px 10px #fafbfa inset',
                        lineHeight: '35px',
                        width: '65%'
                    }} type="text" placeholder="github username"/>
                    <input style={{
                        background: '#f2f2f2',
                        color: '#c7c7c7',
                        marginLeft: '10px',
                        fontSize: '20px',
                        lineHeight: '35px',
                        padding: '0 35px',
                        border: '0',
                        borderRadius: '5px'
                    }} type="button" value="SUBMIT"/>
                </div>
            </div>
        </div>
    }
}

class App extends React.Component {
    render() {
        return <div><Navbar/><Content/></div>
        // return <div>
        //     <Navbar/><BattleHeader/><BattleContent/><BattleFooter/>
        // </div>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('container')
)