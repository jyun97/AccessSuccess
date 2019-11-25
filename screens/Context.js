import React from 'react'
// const AppContext = React.createContext({
// 	theme: "black"
// });
// export default AppContext;


const GlobalContext = React.createContext({});

export class GlobalContextProvider extends React.Component {
  state = {
    isOnline: false,
    theme: "white",
    textTheme: "black"
  }

  switchToOnline = () => {
    this.setState({ isOnline: true });
  }

  switchToOffline = () => {
    this.setState({ isOnline: false });
  }

  toggleTheme = () => {
  	console.log("test")
  	if (this.state.theme === "black") {
  		this.setState({ theme : "white", textTheme: "black"})
  	}
  	else {
  		this.setState({ theme : "black", textTheme: "white"})
  	}
  }

  render () {
    return (
      <GlobalContext.Provider
        value={{
          ...this.state,
          switchToOnline: this.switchToOnline,
          switchToOffline: this.switchToOffline,
          toggleTheme: this.toggleTheme
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

// create the consumer as higher order component
export const withGlobalContext = ChildComponent => props => (
  <GlobalContext.Consumer>
    {
      context => <ChildComponent {...props} global={context}  />
    }
  </GlobalContext.Consumer>
);