import React from 'react';
import { shallow } from 'enzyme';
import mockAxios from 'axios';

import Main from '../Main.jsx';
import MainContainer from '../Main.jsx';
import


describe('Main Component', () => {
  it('It should render without errors', () => {
    const component = shallow(<MainContainer />);
    const wrapper = component.find('.maincomponent');

    expect(wrapper.length).toBe(1);
  })

  it('Should render related movie posters', () => {
    const component = shallow(<Current />);
    const wrapper = component.find('#relatedmovies');

    expect(wrapper.length).toBe(1);
  })

  it("Should return data from database", (done) => {
    const wrapper = shallow(<Main />);

    wrapper.getAllMovies('/api/morelikethis', {}).then(response => {
      expect(response).toEqual({
        data: {}
      })
    })
    expect(mockAxios.request).toHaveBeenCalledWith({
      method: 'get',
      url: '/api/morelikethis'
    });
    expect(mockAxios.request).toHaveBeenCalledTimes(1);
    done();
  })


})