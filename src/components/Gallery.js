import React from 'react'
import gallery1 from '../assets/images/fixation1.jpg'
import gallery2 from '../assets/images/gal2.jpg'
import gallery3 from '../assets/images/niddel.jpg'
// import gallery4 from '../assets/images/seeyou1.jpg'
// import gallery5 from '../assets/images/gal1.jpg'
// import gallery6 from '../assets/images/niddel4.jpg'
function Gallery () {
  return (
    <div id='gallery' className='section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Gallery</span>
            <h2 className='oliven-title'>Our Memories</h2>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row gallery-filter mt-3'>
          <div className='col-md-4 gallery-item party'>
            {/* <a href='/' className='img-zoom'> */}
              <div className='gallery-box'>
                {/* <div className='gallery-img'> */}
                  {' '}
                  <img
                    src={gallery2}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                {/* </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>fixation Ceremony</h4>{' '}
                </div> */}
              </div>
            {/* </a> */}
          </div>
          <div className='col-md-4 gallery-item ceremony'>
            {/* <a href='/' className='img-zoom'> */}
              <div className='gallery-box'>
                {/* <div className='gallery-img'> */}
                  {' '}
                  <img
                    src={gallery1}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                {/* </div> */}
                {/* <div className='gallery-detail'>
                  <h4 className='mb-0'>fixation Ceremony</h4>
                </div> */}
              </div>
            {/* </a> */}
          </div>
          <div className='col-md-4 gallery-item ceremony'>
            {/* <a href='/' className='img-zoom'> */}
              <div className='gallery-box'>
                {/* <div className='gallery-img'> */}
                  {' '}
                  <img
                    src={gallery3}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                {/* </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>fixation Ceremony</h4>{' '}
                </div> */}
              </div>
            {/* </a> */}
          </div>
          {/* <div className='col-md-4 gallery-item ceremony'>
              <div className='gallery-box'>
                  {' '}
                  <img
                    src={gallery4}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
              </div>
          </div>
          <div className='col-md-4 gallery-item ceremony'>
              <div className='gallery-box'>
                  {' '}
                  <img
                    src={gallery5}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
              </div>
          </div>
          <div className='col-md-4 gallery-item ceremony'>
              <div className='gallery-box'>
                  {' '}
                  <img
                    src={gallery6}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
              </div>
          </div> */}
          {/* <div className='col-md-4 gallery-item party'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery4}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Betrothal Party</h4>{' '}
                </div>
              </div>
            </a>
          </div>
          <div className='col-md-4 gallery-item ceremony'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery5}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Betrothal Ceremony</h4>{' '}
                </div>
              </div>
            </a>
          </div>
          <div className='col-md-4 gallery-item party'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery6}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Betrothal Party</h4>{' '}
                </div>
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Gallery
