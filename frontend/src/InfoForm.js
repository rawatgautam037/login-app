import React, {Component } from 'react';
import Select from 'react-select';
import UserStore from './stores/UserStore';

const data = [
    { label: "(GMT -12:00) Eniwetok, Kwajalein", value: "-12:00" },
    { label: "(GMT -11:00) Midway Island, Samoa", value:"-11:00" },
    { label: "(GMT -10:00) Hawaii", value:"-10:00" },
	{ label: "(GMT -9:30) Taiohae", value:"-09:50" },
	{ label: "(GMT -9:00) Alaska", value:"-09:00" },
	{ label: "(GMT -8:00) Pacific Time (US & Canada)", value:"-08:00" },
	{ label: "(GMT -7:00) Mountain Time (US & Canada)", value:"-07:00" },
	{ label: "(GMT -6:00) Central Time (US & Canada), Mexico City", value:"-06:00" },
	{ label: "(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima",  value:"-05:00" },
	{ label: "(GMT -4:30) Caracas", value:"-04:50" },
	{ label: "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz", value:"-04:00" },
	{ label: "(GMT -3:30) Newfoundland", value:"-03:50" },
	{ label: "(GMT -3:00) Brazil, Buenos Aires, Georgetown", value:"-03:00" },
	{ label: "(GMT -2:00) Mid-Atlantic", value:"-02:00" },
	{ label: "(GMT -1:00) Azores, Cape Verde Islands", value:"-01:00" },
	{ label: "(GMT) Western Europe Time, London, Lisbon, Casablanca", value:"+00:00" },
	{ label: "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris", value:"+01:00" },
	{ label: "(GMT +2:00) Kaliningrad, South Africa", value:"+02:00" },
	{ label: "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg", value:"+03:00" },
	{ label: "(GMT +3:30) Tehran", value:"+03:50" },
	{ label: "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi", value:"+04:00" },
	{ label: "(GMT +4:30) Kabul", value:"+04:50" },
	{ label: "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent", value:"+05:00" },
	{ label: "(GMT +5:30) Bombay, Calcutta, Madras, New Delhi", value:"+05:50" },
	{ label: "(GMT +5:45) Kathmandu, Pokhara", value:"+05:75" },
	{ label: "(GMT +6:00) Almaty, Dhaka, Colombo", value:"+06:00" },
	{ label: "(GMT +6:30) Yangon, Mandalay", value:"+06:50" },
	{ label: "(GMT +7:00) Bangkok, Hanoi, Jakarta", value:"+07:00" },
	{ label: "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong", value:"+08:00" },
	{ label: "(GMT +8:45) Eucla", value:"+08:75" },
	{ label: "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk", value:"+09:00" },
	{ label: "(GMT +9:30) Adelaide, Darwin", value:"+09:50" },
	{ label: "(GMT +10:00) Eastern Australia, Guam, Vladivostok", value:"+10:00" },
	{ label: "(GMT +10:30) Lord Howe Island", value:"+10:50" },
	{ label: "(GMT +11:00) Magadan, Solomon Islands, New Caledonia", value:"+11:00" },
	{ label: "(GMT +11:30) Norfolk Island", value:"+11:50" },
	{ label: "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka", value:"+12:00" },
	{ label: "(GMT +12:45) Chatham Islands", value:"+12:75" },
	{ label: "(GMT +13:00) Apia, Nukualofa", value:"+13:00"},
	{ label: "(GMT +14:00) Line Islands, Tokelau", value:"+14:00"}
];



class InfoForm extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            system_ip: "",
            port: "",
            daily_showMe: false,
            weekly_showMe: false,
            time_zone: "",
            sync_duration: "",
        }
    }
    

    handlesystem_ip = (event) => {
        this.setState({ system_ip: event.target.value })
    }

    handleport = (event) => {
        this.setState({ port: event.target.value })
    }

    handletime_zone = (event) => {
        this.setState({time_zone: event.label});
    }


    handleSubmit = (event ) => {
        var flag = 0;
        event.preventDefault();
        
        if(this.state.sync_duration == "") {
            alert("Please Select Sync Duration");
            flag = 1;
        }
        
        if(this.state.time_zone == "") {
            alert("Please select a time zone")
            flag = 1;
        }

        if(flag == 0) {
            UserStore.isFormSubmit = true;
            UserStore.system_ip = this.state.system_ip;
            UserStore.port = this.state.port;
            UserStore.time_zone = this.state.time_zone;
            UserStore.sync_duration = this.state.sync_duration;
        }
        
    }

    daily() {
        this.setState({
            daily_showMe: true,
            weekly_showMe: false,
            sync_duration: "daily"
        })
    }

    weekly() {
        this.setState({
            weekly_showMe: true,
            daily_showMe: false,
            sync_duration: "weekly"
        })
    }


    render() {
    return (
    <div className="InfoForm">
        <form onSubmit = {this.handleSubmit}>
        <h5><center style={{color:"#ff884b"}}>Welcome {this.props.username}</center></h5>
        <center><p style={{color:"yellow"}}>Please Fill the below Details to proceed</p></center>
       
            
        <div>
                <label style={{marginRight:"40px"}}>Time Zone</label>
                <div style={{color:"black", fontFamily:'arial', fontSize:20}} className="time_zone">
                    <Select
                    placeholder={data[0].label}
                    options={data}
                    onChange = {this.handletime_zone}
                    />
                </div>
            </div>

            
            <div style={{marginTop: "35px"}}>
                <label style={{marginRight:"46px"}}>System IP</label>
                <input style={{boxSizing: "border-box", outline: "none", border: "solid 2px #1189de", borderRadius: "4px", color: "#292929", width: "72%", padding: "12px", fontSize: "14px", background: "rgba(255, 255, 255, 1)"}}
                id="system_ip"
                type='text'
                placeholder='System IP'
                value={this.state.system_ip}
                onChange = { this.handlesystem_ip }
                required
                />
            </div>

            
            <div style={{marginTop: "35px"}}>
                <label style={{marginRight:"90px"}}>Port</label>
                <input style={{boxSizing: "border-box", outline: "none", border: "solid 2px #1189de", borderRadius: "4px", color: "#292929", width: "72%", padding: "12px", fontSize: "14px", background: "rgba(255, 255, 255, 1)"}} 
                id="Port"
                type='number'
                placeholder='Port'
                value={this.state.port}
                onChange = { this.handleport }
                required
                />
            </div>
        
            
            <div style={{marginTop: "35px", marginBottom: "35px"}}>
                <label style={{marginRight:"10px"}}>Sync Duration</label>
                <div style={{height:"45px", width:"400px", background: "rgba(255, 255, 255, 1)", display:"inline-block",  boxSizing: "border-box", outline: "none", border: "solid 2px #1189de", borderRadius: "4px"}}>
                    <input type="radio" id="daily" name="duration" value="daily" onClick={()=>this.daily()} style={{marginLeft:"15px"}}/>
                    <label style={{color:"#f88f01"}}>Daily</label>
                    
                    <input type="radio" id="weekly" name="duration" value="weekly" onClick={()=>this.weekly()} style={{marginLeft:"50px"}}/>
                    <label style={{color:"#f88f01"}}>Weekly</label>
                    
                </div>
            </div>

            {
                this.state.daily_showMe?
                <div className="sync_duration_daily" style={{marginLeft:"122px"}}>
                    <input type="radio" style={{marginLeft: "15px"}} id="every" name="duration_daily" value="every" checked="checked"/>
                    <label style={{color:"#ff5e78", paddingRight:"20px"}}>Every</label>
                    <input type="text" id="days" style={{width:"30px", height:"20px"}} required></input>
                    <label style={{color:"#6930c3", marginLeft:"5px"}}>day(s)</label>
                </div>
            :null
            }

            {
            this.state.weekly_showMe?
            <div className="sync_duration_weekly" style={{marginLeft:"122px"}}>
                <label style={{color:"#ff5e78", paddingRight:"20px", marginLeft:"8px"}}>Recur every</label>
                <input type="text" id="recur" style={{width:"30px", height:"20px"}} required></input>
                <label style={{color:"#6930c3", paddingLeft:"5px"}}>week(s) on:</label>
                
                <p style={{padding: "0", margin:"0"}}>
                    <input type="checkbox" id="monday" name="monday" value="monday" />
                    <label> Monday </label>
                    <input type="checkbox" id="tuesday" name="tuesday" value="tuesday"/>
                    <label> Tuesday </label>
                    <input type="checkbox" id="wednesday" name="wednesday" value="wednesday"/>
                    <label> Wednesday </label>
                    <input type="checkbox" id="thursday" name="thursday" value="thursday"/>
                    <label> Thursday </label>
                    <input type="checkbox" id="friday" name="friday" value="friday"/>
                    <label> Friday </label>
                    <input type="checkbox" id="saturday" name="saturday" value="saturday"/>
                    <label> Saturday </label>
                    <input type="checkbox" id="sunday" name="sunday" value="sunday"/>
                    <label> Sunday </label>
                    </p>
            </div>
            :null
        }

        <input type="submit" value="Send"  style={{ width: "40px", minWidth: "280px", marginLeft: "11rem", color: "#565656", padding: "12px", fontSize: "14px", fontWeight: "14px", border: "solid 2px #1189de", borderRadius: "4px", background: "#fff", cursor: "pointer", backgroundColor: "#ff884b"}} />

        </form>
      </div>
    );
  }
}

export default InfoForm;



