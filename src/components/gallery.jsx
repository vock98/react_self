export const Gallery = (props) => {
    return (
        <div id="portfolio" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>{props.Ndata ? props.Ndata.gallery : "Loading"}</h2>
                    <p>{props.Ndata ? props.Ndata.gallery_detail : "Loading"}</p>
                </div>
                <div className="row">
                    <div className="portfolio-items">
                        {props.data
                            ? props.data.map((d, i) => (
                                  <div key={`${d.name}-${i}`} className="col-sm-6 col-md-4 col-lg-4">
                                      <div className="portfolio-item">
                                          <div className="hover-bg">
                                              {" "}
                                              <a href={`${d.real_url}`} title={`${d.project_type}`} data-lightbox-gallery="gallery1">
                                                  <div className="hover-text">
                                                      <h4>{d.name}</h4>
                                                  </div>
                                                  <img src={`${d.image}`} className="img-responsive" alt={`${d.project_type}`} />{" "}
                                              </a>{" "}
                                          </div>
                                      </div>
                                  </div>
                              ))
                            : "loading"}
                    </div>
                </div>
            </div>
        </div>
    );
};
