export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            {props.data ? props.data.title : 'Loading'}
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
              {props.data ? props.data.features : 'Loading'}
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
              {props.data ? props.data.about : 'Loading'}
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
              {props.data ? props.data.services : 'Loading'}
              </a>
            </li>
            {/* <li>
              <a href='#portfolio' className='page-scroll'>
              {props.data ? props.data.gallery : 'Loading'}
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
              {props.data ? props.data.testimonials : 'Loading'}
              </a>
            </li> */}
            <li>
              <a href='#team' className='page-scroll'>
              {props.data ? props.data.team : 'Loading'}
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
              {props.data ? props.data.contact : 'Loading'}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
