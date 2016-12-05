import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe ('CommentBox', () => {
  let component;
  beforeEach((done) => {
    component = renderComponent(CommentBox);
    done();
  });

  it('has the correct class', (done) => {
    expect(component).to.have.class('comment-box');
    done();
  })
  it('has a text area', (done) => {
    expect(component.find('textarea')).to.exist;
    done();
  });

  it('has a button', (done) => {
    expect(component.find('button')).to.exist;
    done();
  });

  describe('entering some text', () => {
    let textareaValue = 'new comment';
    beforeEach((done) => {
      // Simulate the onchange event with a value.
      component.find('textarea').simulate('change', textareaValue);
      done();
    });

    it('shows text that is entered', (done) =>{
      expect(component.find('textarea')).to.have.value(textareaValue);
      done();
    });

    it('when submitted, clears the input', (done) => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
      done();
    });
  });


});