import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import icon from './img/battle-one.svg'
class Navbar extends React.Component {
    render (){
        return <div style={{display:'flex',justifyContent:'space-between'}}>
            <ul style={{display:'flex',fontWeight:'700'}}>
                <li style={{paddingRight:'10px',cursor:'pointer',color:'rgb(187, 46, 31)'}}>Popular</li>
                <li style={{cursor:'pointer'}}>Battle</li>
                </ul>
                <button style={{border:'none',background:'transparent',fontSize:'30px'}}>🔦</button>
            </div>
    }
}
class Header extends React.Component {
    render (){
        return <ul style={{display:'flex',justifyContent:'center'}}>
    <li><button style={{color:'red',padding:'1px 6px',backgroundColor:'#fff',fontWeight:'700',fontSize:'18px'}}>All</button></li>
    <li><button style={{padding:'1px 6px',backgroundColor:'#fff',fontWeight:'700',fontSize:'18px'}}>JavaScript</button></li>
    <li><button style={{padding:'1px 6px',backgroundColor:'#fff',fontWeight:'700',fontSize:'18px'}}>Ruby</button></li>
    <li><button style={{padding:'1px 6px',backgroundColor:'#fff',fontWeight:'700',fontSize:'18px'}}>CSS</button></li>
    <li><button style={{padding:'1px 6px',backgroundColor:'#fff',fontWeight:'700',fontSize:'18px'}}>Python</button></li>
</ul>
    }
}
class Card extends React.Component {
    render (){
        const list = this.props.arr.map((item,key)=> <div style={{width:'250px', padding:'20px',backgroundColor:'#ebebeb',textAlign:'center',margin:'10px 0'}}>
            <h3>#{ key+1 }</h3>
        <img src={item.owner.avatar_url} alt={ item.owner.login } style={{width:'150px',height:'150px',margin:'0 auto'}} />
        <h2 style={{fontSize:'1.5em',lineHeight:'40px',fontWeight:'bold'}} ><a href="#" style={{color:'deeppink'}}>{item.owner.login}</a></h2>
        <ul style={{textAlign:'left',lineHeight:'35px'}}>
            <li><i class="fa fa-user" aria-hidden="true" style={{fontSize:'23px',color:'#ffc06d',width:'42px',height:'25px',textAlign:'center'}}></i><a href="#" style={{color:'#333'}}>{item.owner.login}</a></li>
            <li><i class="fa fa-star" aria-hidden="true" style={{fontSize:'23px',color:'#ffd900',width:'42px',height:'25px',textAlign:'center'}}></i><a href="#" style={{color:'#333'}}>{item.stargazers_count} stars</a></li>
            <li><i class="fa fa-code-fork" aria-hidden="true" style={{fontSize:'23px',color:'#91c9f5',width:'42px',height:'25px',textAlign:'center'}}></i><a href="#" style={{color:'#333'}}>{item.forks_count} forks</a></li>
            <li><i class="fa fa-exclamation-triangle" aria-hidden="true" style={{fontSize:'23px',color:'#f38991',width:'42px',height:'25px',textAlign:'center'}} ></i><a href="#" style={{color:'#333'}}>{item.open_issues_count} open issues</a></li>
        </ul>
    </div>)
        return <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>{list}</div>
    }
}
class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {arr:[]}
    }
    async componentDidMount(){
        const res = await axios.get('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories')
        // console.log(res.data.items)
        this.setState({
            arr:res.data.items
        })
    }
    render() {
        return <div>
            <Card arr={this.state.arr} />
        </div>
    }
}
class BattleHeader extends React.Component{
    render () {
        return <div style={{ textAlign:'center',fontSize:'30px',margin:'20px'}}>
            <h2 style={{fontWeight:'normal'}}>Instructions</h2>
            </div>
    }
}
class BattleContent extends React.Component {
    render (){
        return <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
            <div>
                <h3 style={{fontWeight:'normal',fontSize:'28px',margin:'10px'}}>Enter two Github users</h3>
                <div><img style={{width:'140px'}} src={icon} alt="" /></div>
            </div>
            <div>
                <h3 style={{fontWeight:'normal',fontSize:'28px',margin:'10px'}}>Battle</h3>
                <div><img style={{width:'140px'}} src={icon} alt="" /></div>
            </div>
            <div>
                <h3 style={{fontWeight:'normal',fontSize:'28px',margin:'10px'}}>See the winner</h3>
                <div><img style={{width:'140px'}}  src={icon} alt="" /></div>
            </div>
        </div>
    } 
}
class BattleFooter extends React.Component {
    render () {
        return <div>
            <h2 style={{fontWeight:'normal',textAlign:'center',fontSize:'35px'}}>Players</h2>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div style={{width:'50%'}}>
                    <p>Player One</p>
                    <input style={{fontSize:'20px',margin:'5px 0',boxShadow: '0px 0px 10px #005efe inset'}} type="text" placeholder="github username" />
                    <input style={{background:'#f2f2f2',color:'#c7c7c7',marginLeft:'10px'}} type="button" value="SUBMIT" />
                </div>
                <div style={{width:'50%'}}>
                    <p>Player Two</p>
                    <input style={{fontSize:'20px',margin:'5px 0',boxShadow: '0px 0px 10px #005efe inset'}} type="text" placeholder="github username" />
                    <input style={{background:'#f2f2f2',color:'#c7c7c7',marginLeft:'10px'}} type="button" value="SUBMIT" />
                </div>
            </div>
        </div>
    }
}
class App extends React.Component {
    render(){
        // return <div><Navbar /><Header /><Content /></div>
        return <div>
            <Navbar /><BattleHeader /><BattleContent /><BattleFooter />
            </div>
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('container')
)