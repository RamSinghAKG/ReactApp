import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Link } from 'react-router-dom';
import App from '../src/App';
const sampleFun = sinon.spy;

describe('<App />', () => {

  it('Should render without crashing', () => {
    const wrapper = shallow(<App />);
    const link = <Link to="/pizza" replace={false}>Pizza</Link>;
    expect(wrapper.contains(link)).to.equal(true);
    // console.log(wrapper.debug());
  });

  it('Should return sum', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().displaySum()).to.equal(30);
  });
});
