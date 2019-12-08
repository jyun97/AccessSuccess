import React from 'react'
// const AppContext = React.createContext({
// 	theme: "black"
// });
// export default AppContext;


const GlobalContext = React.createContext({});

export class GlobalContextProvider extends React.Component {
  state = {
    theme: "white",
    textTheme: "black"
  }

  resetTheme = () => {
    this.setState({ theme: "white", textTheme: "black" });
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
          resetTheme: this.resetTheme,
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