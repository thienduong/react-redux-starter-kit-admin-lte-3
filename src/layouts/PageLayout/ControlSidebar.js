import React from 'react'
import { connect } from 'react-redux'
import {
  BG_DANGER, BG_GREY_LIGHT,
  BG_INFO,
  BG_PRIMARY,
  BG_SUCCESS,
  BG_WARNING,
  BG_WHITE, CUSTOM_DARKSIDEBAR_VARIANTS, CUSTOM_LIGHTSIDEBAR_VARIANTS, customDarkLightSidebar,
  variantsNavbar
} from '../../components/AppUIReducer'

class ControlSidebar extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    debugger
    const { dispatch } = this.props
    let style = { width:'40px', height: '20px', borderRadius: '25px', marginRight: '10px', marginBottom: '10px', opacity: '0.8', cursor: 'pointer' }
    return (

      <aside className='control-sidebar control-sidebar-dark' style={{ top: '57px' }} >

        <div className='p-3'><h5>Customize AdminLTE</h5>
          <hr className='mb-2' />
          <h6>Navbar Variants</h6>
          <div className='d-flex'>
            <div className='d-flex flex-wrap mb-3'>
              <div className='bg-primary elevation-2' style={style}
                onClick={() => dispatch(variantsNavbar(BG_PRIMARY))} />
              <div className='bg-info elevation-2' style={style}
                onClick={() => dispatch(variantsNavbar(BG_INFO))} />
              <div className='bg-success elevation-2' style={style}
                onClick={() => dispatch(variantsNavbar(BG_SUCCESS))} />
              <div className='bg-danger elevation-2' style={style}
                onClick={() => dispatch(variantsNavbar(BG_DANGER))} />
              <div className='bg-warning elevation-2' style={style}
                onClick={() => dispatch(variantsNavbar(BG_WARNING))} />
              <div className='bg-white elevation-2' style={style}
                onClick={() => dispatch(variantsNavbar(BG_WHITE))} />
              <div className='bg-gray-light elevation-2' style={style}
                onClick={() => dispatch(variantsNavbar(BG_GREY_LIGHT))} />
            </div>
          </div>
          <div className='mb-4'><input type='checkbox' value='1' checked='checked'
            className='mr-1' /><span>Navbar border</span>
          </div>

          <h6>Dark Sidebar Variants</h6>
          <div className='d-flex' />
          <div className='d-flex flex-wrap mb-3'>
            <div className='bg-primary elevation-2' style={style}
              onClick={() => dispatch(customDarkLightSidebar(BG_PRIMARY, CUSTOM_DARKSIDEBAR_VARIANTS))} />
            <div className='bg-warning elevation-2' style={style}
              onClick={() => dispatch(customDarkLightSidebar(BG_WARNING, CUSTOM_DARKSIDEBAR_VARIANTS))} />
            <div className='bg-info elevation-2' style={style}
              onClick={() => dispatch(customDarkLightSidebar(BG_INFO, CUSTOM_DARKSIDEBAR_VARIANTS))} />
            <div className='bg-danger elevation-2' style={style}
              onClick={() => dispatch(customDarkLightSidebar(BG_DANGER, CUSTOM_DARKSIDEBAR_VARIANTS))} />
            <div className='bg-success elevation-2' style={style}
              onClick={() => dispatch(customDarkLightSidebar(BG_SUCCESS, CUSTOM_DARKSIDEBAR_VARIANTS))} />
          </div>
          <h6>Light Sidebar Variants</h6>
          <div className='d-flex' />
          <div className='d-flex flex-wrap mb-3'>
            <div className='bg-primary elevation-2' style={style}
              onClick={() => dispatch(customDarkLightSidebar(BG_PRIMARY, CUSTOM_LIGHTSIDEBAR_VARIANTS))} />
            <div className='bg-warning elevation-2' style={style}
              onClick={() => dispatch(customDarkLightSidebar(BG_WARNING, CUSTOM_LIGHTSIDEBAR_VARIANTS))} />
            <div className='bg-info elevation-2' style={style}
              onClick={() => dispatch(customDarkLightSidebar(BG_INFO, CUSTOM_LIGHTSIDEBAR_VARIANTS))} />
            <div className='bg-danger elevation-2' style={style}
              onClick={() => dispatch(customDarkLightSidebar(BG_DANGER, CUSTOM_LIGHTSIDEBAR_VARIANTS))} />
            <div className='bg-success elevation-2' style={style}
              onClick={() => dispatch(customDarkLightSidebar(BG_SUCCESS, CUSTOM_LIGHTSIDEBAR_VARIANTS))} />
          </div>
          <h6>Brand Logo Variants</h6>
          <div className='d-flex' />
          <div className='d-flex flex-wrap mb-3'>
            <div className='bg-primary elevation-2'
              style={style} onClick={() => dispatch(variantsNavbar(BG_PRIMARY))} />
            <div className='bg-info elevation-2'
              style={style} onClick={() => dispatch(variantsNavbar(BG_INFO))} />
            <div className='bg-success elevation-2'
              style={style} onClick={() => dispatch(variantsNavbar(BG_SUCCESS))} />
            <div className='bg-danger elevation-2'
              style={style} onClick={() => dispatch(variantsNavbar(BG_DANGER))} />
            <div className='bg-warning elevation-2'
              style={style} onClick={() => dispatch(variantsNavbar(BG_WARNING))} />
            <div className='bg-white elevation-2'
              style={style} onClick={() => dispatch(variantsNavbar(BG_WHITE))} />
            <div className='bg-gray-light elevation-2'
              style={style} onClick={() => dispatch(variantsNavbar(BG_GREY_LIGHT))} />
            <a onClick={() => dispatch(variantsNavbar(BG_PRIMARY))}>Clear</a></div>
        </div>
      </aside>

    )
  }
}

export default connect()(ControlSidebar)
