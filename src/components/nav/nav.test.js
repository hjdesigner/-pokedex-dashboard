import 'raf/polyfill'
import React from 'react'
import Nav from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('Component <Nav />', () => {
  it('Should return ul', () => {
    const wrapper = shallow(<Nav />)
    expect(wrapper.find('ul')).to.have.length(1)
  })
  it('Should contain class component-nav', () => {
    const wrapper = shallow(<Nav />)
    expect(wrapper.find('.component-nav')).to.have.length(1)
  })
  it('Should return inside the ul a li', () => {
    const wrapper = shallow((
      <Nav>
        <li />
      </Nav>
    ))
    expect(wrapper.find('li')).to.have.length(1)
  })
  it('Should return inside the ul more one li', () => {
    const wrapper = shallow((
      <Nav>
        <li />
        <li />
      </Nav>
    ))
    expect(wrapper.find('li')).to.have.length(2)
  })
  it('Should return inside the ul a li with link and text', () => {
    const wrapper = shallow((
      <Nav>
        <li><a href='#'>Link</a></li>
      </Nav>
    ))
    expect(wrapper.contains(<li><a href='#'>Link</a></li>)).to.equal(true)
  })
  it('Should return inside the ul two li with link and text', () => {
    const wrapper = shallow((
      <Nav>
        <li><a href='#'>Link 1</a></li>
        <li><a href='#'>Link 2</a></li>
      </Nav>
    ))
    expect(wrapper.contains(<li><a href='#'>Link 1</a></li>)).to.equal(true)
    expect(wrapper.contains(<li><a href='#'>Link 2</a></li>)).to.equal(true)
  })
})
