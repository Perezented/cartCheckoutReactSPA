import PanelFooter from "./panelFooter";
import PanelBody from "./panelBody";
import PanelHeading from "./panelHeading";

export default function ShoppingCart() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="panel panel-info">
            <PanelHeading />
            <PanelBody />
            <PanelFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
