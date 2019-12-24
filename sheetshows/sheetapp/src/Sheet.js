import React, { Component } from 'react'
import * as WebDataRocksReact from 'webdatarocks'

export default class Sheet extends Component {
      componentDidMount = () => {
        new WebDataRocksReact({
            container: "#wdr-component",
            beforetoolbarcreated: this.customizeToolbar,
            toolbar: true,
            height: 600,
            width: 1200,
            report: {
                dataSource: {
                    filename: "https://github.com/shanewas/rocks/blob/master/sheetshows/sheetapp/final_status.csv"
                },
                options: {
                    grid: {
                        type: "flat"
                    }
                },
            }
        });
      }
    customizeToolbar(toolbar) {
        var tabs = toolbar.getTabs();
        toolbar.getTabs = function() {
            // var menu = tabs[0].menu;
            // delete menu[1];
            // delete menu[2];
            delete tabs[0];
            delete tabs[1];
            delete tabs[2];
            delete tabs[7];
            return tabs;
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="container center" id="wdr-component" ref={this.div}>dasdas</div>
            </React.Fragment>
    
        )
    }
}
