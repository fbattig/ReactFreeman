import React from 'react'

export class ThemeSelector extends React.Component {
  render(){
    return(
      <div className={'bg-dark p-2'}>
        <div className={'bg-info p-2'}>
            {this.props.children}
          </div>
        </div>
    )
  }
}