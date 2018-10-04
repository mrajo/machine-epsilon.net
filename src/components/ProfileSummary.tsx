import * as React from "react";

interface IProfileSummaryProps {
  class: string;
  summary: string;
}

class ProfileSummary extends React.Component<IProfileSummaryProps, any> {
  public render() {
    return (
      <div className={"card-content " + this.props.class}>
        <p>{this.props.summary}</p>
      </div>
    );
  }
}

export default ProfileSummary;
