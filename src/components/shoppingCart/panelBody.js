export default function PanelBody() {
  return (
    <div className="panel-body">
      <div className="row">
        <div className="col-xs-2">
          <img
            alt="filler"
            className="img-responsive"
            src="http://placehold.it/100x70"
          />
        </div>
        <div className="col-xs-4">
          <h4 className="product-name">
            <strong>Product name</strong>
          </h4>
          <h4>
            <small>Product description</small>
          </h4>
        </div>
        <div className="col-xs-6">
          <div className="col-xs-6 text-right">
            <h6>
              <strong>
                25.00 <span className="text-muted">x</span>
              </strong>
            </h6>
          </div>
          <div className="col-xs-4">
            <input type="text" className="form-control input-sm" value="1" />
          </div>
          <div className="col-xs-2">
            <button type="button" className="btn btn-link btn-xs">
              <span className="glyphicon glyphicon-trash"> </span>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-xs-2">
          <img
            alt="filler"
            className="img-responsive"
            src="http://placehold.it/100x70"
          />
        </div>
        <div className="col-xs-4">
          <h4 className="product-name">
            <strong>Product name</strong>
          </h4>
          <h4>
            <small>Product description</small>
          </h4>
        </div>
        <div className="col-xs-6">
          <div className="col-xs-6 text-right">
            <h6>
              <strong>
                25.00 <span className="text-muted">x</span>
              </strong>
            </h6>
          </div>
          <div className="col-xs-4">
            <input type="text" className="form-control input-sm" value="1" />
          </div>
          <div className="col-xs-2">
            <button type="button" className="btn btn-link btn-xs">
              <span className="glyphicon glyphicon-trash"> </span>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="text-center">
          <div className="col-xs-9">
            <h6 className="text-right">Added items?</h6>
          </div>
          <div className="col-xs-3">
            <button type="button" className="btn btn-default btn-sm btn-block">
              Update cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
