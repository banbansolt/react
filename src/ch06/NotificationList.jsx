import React from "react";
const reservedNotifications =[

    {
        id :1,
        message: "안녕하세요~ 오늘의 스케줄입니다"

    },
    {
        id :2,
        message: "웹프로그래밍으용 수업의 집중해주세요"

    },
    {
        id :3,
        message: "GIT에 COMMIT 하고 PUSH 해주세요. 수업을 마치겠습니다"

    }
]
class NotificationList extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            notifications: []
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
    render() {
        return(
            <div>

            </div>
        );
    }
}

export default NotificationList;