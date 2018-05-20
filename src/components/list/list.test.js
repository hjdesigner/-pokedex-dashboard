import 'raf/polyfill'
import React from 'react'
import List from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('Component <List />', () => {
  let wrapper1, wrapper2, data1, data2
  beforeEach(() => {
    data1 = [
      {
        'url': 'https://pokeapi.co/api/v2/pokemon/1/',
        'name': 'bulbasaur'
      }
    ]
    data2 = [
      {
        'url': 'https://pokeapi.co/api/v2/pokemon/1/',
        'name': 'bulbasaur'
      },
      {
        'url': 'https://pokeapi.co/api/v2/pokemon/2/',
        'name': 'ivysaur'
      }
    ]
    wrapper1 = shallow(<List items={data1} />)
    wrapper2 = shallow(<List items={data2} />)
  })

  it('Should wrapper1 return ul', () => {
    expect(wrapper1.find('ul')).to.have.length(1)
  })
  it('Should wrapper1 return inside the ul a li', () => {
    expect(wrapper1.find('li')).to.have.length(1)
  })
  it('Wrapper1 should contain image correct equal date1', () => {
    const image = wrapper1.find('figure')
    expect(image.contains(<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' />)).to.equal(true)
  })
  it('Wrapper1 should contain name polemon correct equal date1', () => {
    const name = wrapper1.find('h2')
    expect(name.text()).to.equal('bulbasaur')
  })
  it('Wrapper1 should contain link whit data-id correct equal 1', () => {
    expect(wrapper1.find('[data-id="https://pokeapi.co/api/v2/pokemon/1/"]')).to.have.length(1)
  })
  it('Should wrapper2 return ul', () => {
    expect(wrapper2.find('ul')).to.have.length(1)
  })
  it('Should wrapper2 return inside the ul a li', () => {
    expect(wrapper2.find('li')).to.have.length(2)
  })
  it('Wrapper2 should contain image correct equal date2 in first li', () => {
    const image = wrapper2.find('figure')
    expect(image.contains(<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' />)).to.equal(true)
  })
  it('Wrapper2 should contain name polemon correct equal date1 in fist li', () => {
    const firstLi = wrapper2.find('li').at(0)
    expect(firstLi.contains(<h2>bulbasaur</h2>)).to.equal(true)
  })
  it('Wrapper2 should contain link whit data-id correct equal date2 in first li', () => {
    expect(wrapper2.find('[data-id="https://pokeapi.co/api/v2/pokemon/2/"]')).to.have.length(1)
  })
  it('Wrapper2 should contain image correct equal date2 in last li', () => {
    const image = wrapper2.find('figure')
    expect(image.contains(<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' />)).to.equal(true)
  })
  it('Wrapper2 should contain name polemon correct equal date1 in last li', () => {
    const lastLi = wrapper2.find('li').at(1)
    expect(lastLi.contains(<h2>ivysaur</h2>)).to.equal(true)
  })
  it('Wrapper2 should contain link whit data-id correct equal date2 in last li', () => {
    expect(wrapper2.find('[data-id="https://pokeapi.co/api/v2/pokemon/2/"]')).to.have.length(1)
  })
})
