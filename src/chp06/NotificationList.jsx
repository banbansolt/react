import React from "react";
import Notification from "./Notification";

const reservedNotifications =[

    {
        id :1,
        message: "안녕하세요~ 오늘의 스케줄입니다"

    },
    {
        id :2,
        message: "웹프로그래밍으용 수업의 집중해 주세요"

    },
    {
        id :3,
        message: "GIT에 COMMIT 하고 PUSH 해주세요. 수업을 마치겠습니다"

    }
];

var timer;
class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        }
    }

    componentDidMount() {
        const {notifications} = this.state;

        timer = setInterval(()=>{
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index])
                this.setState({
                    notifications: notifications
                })
            }else{
                //     notifications라는 state를 초기화
                //     Interval 설정을 Clear
                this.setState({
                    notifications: []
                })
                clearInterval(timer);
            }
        }, 2000)
    }

    componentWillUnmount() {
        if(timer){
            clearInterval(timer);
        }
    }

    render() {
        return(
            <div>
                {
                    this.state.notifications.map((notification)=>{
                        return <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message} />
                    })
                }
            </div>
        );
    }
}

export default NotificationList;