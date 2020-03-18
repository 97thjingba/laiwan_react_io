import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Burger from '@material-ui/icons/FormatAlignJustify';
import DrawerListData from './model/DrawerListData';
import DrawerListModel from './model/DrawerListModel';

export default class DrawerLeft extends Component {
    constructor(props) {
        super(props);
        this.drawerListModel = new DrawerListModel();
        this.drawerListModel.createDrawerList(DrawerListData);
        this.state = {
            left: false,
            list: this.drawerListModel.listItems(),
        };
    }

    _toggleDrawer = () => {
        this.setState({ left: true });
    };

    _toClose = () => {
        this.setState({ left: false });
    };

    _sideList = () => {
        const { list } = this.state;
        return (
            <div>
                <List>
                    {list.map((item) => (
                        <a href={item.titleLink}>
                            <ListItem button key={item.title}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        </a>
                    ))}
                </List>
                <Divider />
            </div>
        );
    };

    render() {
        const { left } = this.state;
        return (
            <div>
                <nav role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Button
                            onClick={() => {
                                this._toggleDrawer();
                            }}
                        >
                            <Burger />
                        </Button>
                        <Drawer
                            open={left}
                            onClose={() => { this._toClose(); }}
                        >
                            {this._sideList()}
                        </Drawer>
                    </div>
                </nav>
            </div>
        );
    }
}
