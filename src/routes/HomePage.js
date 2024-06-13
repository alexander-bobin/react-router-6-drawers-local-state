import DrawerIsStepImage from "../images/drawers-are-a-step.png"
import DrawerIsNotStepImage from "../images/drawers-are-not-a-step.png"

function HomePage () {
  return (
    <>
      <p>
        This application has two purposes:
      </p>
      <ul className="mt-4 list-disc">
        <li className="ml-4">Allow usage of drawers where they are a new step in navigation or not</li>
        <li className="ml-4">A code example for "routed drawers". Go to <a href="https://alexander-bobin.github.io/react-router-6-drawers-query-string/" className="text-blue-500 hover:underline">React Router 6 Query String Drawers</a> to see another approach.</li>
      </ul>
      <h3 className="mt-6 text-lg font-bold">Are drawers are a new step in navigation?</h3>
      <img src={DrawerIsStepImage} alt="Drawers are a new step" className="mt-2" />
      <img src={DrawerIsNotStepImage} alt="Drawers are not a new step" className="mt-2" />
      <h3 className="mt-6 text-lg font-bold">How to use this application</h3>
      <p className="mt-2">
         <strong>Important:</strong> Do not use the Escape key or click the scrim to close drawers. This is a limitation of this example app. It won't be a problem in a production app.
      </p>
      <ul className="mt-4 list-disc">
        <li className="ml-4">Open a drawer, then click back</li>
        <li className="ml-4">Open a drawer, open another above, then click back</li>
        <li className="ml-4">Open then close a drawer then click back...</li>
        <li className="ml-8">then forward</li>
        <li className="ml-4">Open a drawer, open another drawer above, then close both, then click back...</li>
        <li className="ml-8">then click forward</li>
      </ul>
      <h3 className="mt-6 text-lg font-bold">What this app has</h3>
      <ul className="mt-4 list-disc">
        <li className="ml-4 mb-2">
          Drawer stacking<br />
          Users page {'>'} User page {'>'} Post drawer {'>'} Comments drawer
        </li>
        <li className="ml-4 mb-2">
          Tabbed drawers<br />
          Users page {'>'} User page {'>'} Tasks drawer
        </li>
        <li className="ml-4 mb-2">
          Different sized drawers<br />
          Users page {'>'} User page {'>'} Album drawer {'>'} Photo drawer
        </li>
        <li className="ml-4 mb-2">
          Shared drawers<br />
          Users page {'>'} User page {'>'} Post drawer {'>'} Comments drawer<br/>
          Posts page {'>'} Post page {'>'} Comments drawer
        </li>
        <li className="ml-4 mb-2">
          Drawer on a filterable list page<br />
          Posts page {'>'} Filter by user {'>'} Settings drawer
        </li>
      </ul>
    </>
  )
}

export default HomePage
