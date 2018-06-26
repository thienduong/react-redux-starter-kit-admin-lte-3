import React from 'react'

class ControlSidebar extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let style = { width:'40px', height: '20px', borderRadius: '25px', marginRight: '10px', marginBottom: '10px', opacity: '0.8', cursor: 'pointer' }
    return (

      <aside className='control-sidebar control-sidebar-dark' style={{ top: '57px' }} >

        <div className='p-3'><h5>Customize AdminLTE</h5>
          <hr className='mb-2' />
          <h6>Navbar Variants</h6>
          <div className='d-flex'>
            <div className='d-flex flex-wrap mb-3'>
              <div className='bg-primary elevation-2' style={style} />
              <div className='bg-info elevation-2' style={style} />
              <div className='bg-success elevation-2' style={style} />
              <div className='bg-danger elevation-2' style={style} />
              <div className='bg-warning elevation-2' style={style} />
              <div className='bg-white elevation-2' style={style} />
              <div className='bg-gray-light elevation-2' style={style} />
            </div>
          </div>
          <div className='mb-4'><input type='checkbox' value='1' checked='checked'
            className='mr-1' /><span>Navbar border</span>
          </div>

          <h6>Dark Sidebar Variants</h6>
          <div className='d-flex' />
          <div className='d-flex flex-wrap mb-3'>
            <div className='bg-primary elevation-2' style={style} />
            <div className='bg-warning elevation-2' style={style} />
            <div className='bg-info elevation-2' style={style} />
            <div className='bg-danger elevation-2' style={style} />
            <div className='bg-success elevation-2' style={style} />
          </div>
          <h6>Light Sidebar Variants</h6>
          <div className='d-flex' />
          <div className='d-flex flex-wrap mb-3'>
            <div className='bg-primary elevation-2' style={style} />
            <div className='bg-warning elevation-2' style={style} />
            <div className='bg-info elevation-2' style={style} />
            <div className='bg-danger elevation-2' style={style} />
            <div className='bg-success elevation-2' style={style} />
          </div>
          <h6>Brand Logo Variants</h6>
          <div className='d-flex' />
          <div className='d-flex flex-wrap mb-3'>
            <div className='bg-primary elevation-2'
              style={style} />
            <div className='bg-info elevation-2'
              style={style} />
            <div className='bg-success elevation-2'
              style={style} />
            <div className='bg-danger elevation-2'
              style={style} />
            <div className='bg-warning elevation-2'
              style={style} />
            <div className='bg-white elevation-2'
              style={style} />
            <div className='bg-gray-light elevation-2'
              style={style} />
            <a>clear</a></div>
        </div>
      </aside>

    )
  }
}
export default ControlSidebar
