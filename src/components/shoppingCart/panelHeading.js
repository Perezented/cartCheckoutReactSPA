export default function PanelHeading() {
  return (
    <div className="panel-heading">
      <div className="panel-title">
        <div className="row">
          <div className="col-xs-6">
            <h5>
              <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
              Shopping Cart
            </h5>
          </div>
          <div className="col-xs-6">
            <button type="button" className="btn btn-primary btn-sm btn-block">
              <span className="glyphicon glyphicon-share-alt"></span> Continue
              shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
