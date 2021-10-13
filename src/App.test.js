import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Navbar from '../src/components/Navbar';
import APi from '../src/components/Wrapper/apiForTest';


describe('My Test Suite', () => {

  test('Navbar component rendered Properly', () => {
    render(<Navbar />);
  });

  test('Logo(renders an image)', () => {
    render(<Navbar />);
    const App = screen.getByRole('img');
    expect(App).toHaveAttribute('alt', 'Logo');
  });

  test("Api Response ====> success", async function () {
    const responce = new APi()
    var data = await responce.getData()
    expect(Object.keys(data)[0]).toEqual("success")

  })

});
