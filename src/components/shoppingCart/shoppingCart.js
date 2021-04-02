import PanelFooter from "./panelFooter";
import PanelBody from "./panelBody";
import PanelHeading from "./panelHeading";

export default function ShoppingCart() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-xs-8">
          <div class="panel panel-info">
            <PanelHeading />
            <PanelBody />
            <PanelFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
