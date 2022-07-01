import { expect } from 'chai';
import { Block, IProps } from './Block';

describe('Block', () => {
  class TestBlock extends Block<IProps> {
    render(): string {
      return `<div id="${this.props.id}">Test</div>`;
    }
  }
  it('Should store props', () => {
    const id = 'test';
    const block = new TestBlock({ id });
    expect(block.props.id).to.eq(id);
  });

  it('Should render', () => {
    const id = 'test';
    const block = new TestBlock({ id });
    expect(block.render()).to.eq(`<div id="${id}">Test</div>`);
  });
});