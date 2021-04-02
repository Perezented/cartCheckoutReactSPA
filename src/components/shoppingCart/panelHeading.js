export default function PanelHeading() {
  return (
    <div class="panel-heading">
      <div class="panel-title">
        <div class="row">
          <div class="col-xs-6">
            <h5>
              <span class="glyphicon glyphicon-shopping-cart"></span> Shopping
              Cart
            </h5>
          </div>
          <div class="col-xs-6">
            <button type="button" class="btn btn-primary btn-sm btn-block">
              <span class="glyphicon glyphicon-share-alt"></span> Continue
              shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
