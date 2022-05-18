import React from "react";
import { List } from "antd";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

class TodoList extends React.Component {

    render() {
        return (
            <div>
                <List
                    bordered
                    dataSource={this.props.todos}
                    renderItem={item => (
                        <List.Item
                            key={item.id}
                            actions={[
                                <EditOutlined onClick={() => console.log(item.id)}/>,
                                <DeleteOutlined onClick={() => this.props.onDelete(item.id)}/>
                            ]}
                        >
                            {item.info}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default TodoList;
