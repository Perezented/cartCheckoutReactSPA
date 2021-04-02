export default function PanelBody() {
  return (
    <div class="panel-body">
      <div class="row">
        <div class="col-xs-2">
          <img
            alt="filler"
            class="img-responsive"
            src="http://placehold.it/100x70"
          />
        </div>
        <div class="col-xs-4">
          <h4 class="product-name">
            <strong>Product name</strong>
          </h4>
          <h4>
            <small>Product description</small>
          </h4>
        </div>
        <div class="col-xs-6">
          <div class="col-xs-6 text-right">
            <h6>
              <strong>
                25.00 <span class="text-muted">x</span>
              </strong>
            </h6>
          </div>
          <div class="col-xs-4">
            <input type="text" class="form-control input-sm" value="1" />
          </div>
          <div class="col-xs-2">
            <button type="button" class="btn btn-link btn-xs">
              <span class="glyphicon glyphicon-trash"> </span>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-xs-2">
          <img
            alt="filler"
            class="img-responsive"
            src="http://placehold.it/100x70"
          />
        </div>
        <div class="col-xs-4">
          <h4 class="product-name">
            <strong>Product name</strong>
          </h4>
          <h4>
            <small>Product description</small>
          </h4>
        </div>
        <div class="col-xs-6">
          <div class="col-xs-6 text-right">
            <h6>
              <strong>
                25.00 <span class="text-muted">x</span>
              </strong>
            </h6>
          </div>
          <div class="col-xs-4">
            <input type="text" class="form-control input-sm" value="1" />
          </div>
          <div class="col-xs-2">
            <button type="button" class="btn btn-link btn-xs">
              <span class="glyphicon glyphicon-trash"> </span>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="text-center">
          <div class="col-xs-9">
            <h6 class="text-right">Added items?</h6>
          </div>
          <div class="col-xs-3">
            <button type="button" class="btn btn-default btn-sm btn-block">
              Update cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}