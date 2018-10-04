import * as React from "react";
import Helmet from "react-helmet";
import "../styles/bulma.scss";

interface ILayoutProps {
  metadata: {
    title: string;
  };
  children?: any;
}

class Layout extends React.Component<ILayoutProps, any> {
  public render() {
    return (
      <>
        <Helmet
          title={this.props.metadata.title}
          meta={[
            { name: "description", content: "Resume for Anthony Castle" }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="content">
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Layout;