import ForgeUI, { render, ProjectPage, Fragment, Text, IssuePanel } from '@forge/ui';

const App = () => {
   // https://developer.atlassian.com/platform/forge/call-a-jira-api/
   
  return (
    // <Fragment>
    //   <Text>Hello world!</Text>
    // </Fragment>
    <ProjectPage>
      <Text>Hello, world!</Text>
    </ProjectPage>
  );
};

export const run = render(<App />);

// export const run = render(
//   <IssuePanel>
//     <App />
//   </IssuePanel>
// );
