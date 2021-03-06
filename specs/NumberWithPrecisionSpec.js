describe("Number With Precision", function() {
  it('Defaults', function() {
    var out = NumberHelpers.number_with_precision(111.2345);
    expect(out).toBe('111.235');
  });
  it('Precision: 2', function() {
    var out = NumberHelpers.number_with_precision(111.2345, {precision: 2});
    expect(out).toBe('111.23');
  });
  it('Precision: 5', function() {
    var out = NumberHelpers.number_with_precision(13, {precision: 5});
    expect(out).toBe('13.00000');
  });
  it('Precision: 0', function() {
    var out = NumberHelpers.number_with_precision(389.32314, {precision: 0});
    expect(out).toBe('389');
  });
  it('Significant: 0', function() {
    var out = NumberHelpers.number_with_precision(111.2345, {significant: true});
    expect(out).toBe('111');
  });
  it('Significant: 1', function() {
    var out = NumberHelpers.number_with_precision(111.2345, {significant: true, precision: 1});
    expect(out).toBe('100');
  });
  it('Significant: 4', function() {
    var out = NumberHelpers.number_with_precision(389.32314, {significant: true, precision: 4});
    expect(out).toBe('389.3');
  });
  it('Significant: 5', function() {
    var out = NumberHelpers.number_with_precision(13, {significant: true, precision: 5});
    expect(out).toBe('13.00000');
  });
  it('Significant: 6', function() {
    var out = NumberHelpers.number_with_precision(13.00000004, {significant: true, precision: 6});
    expect(out).toBe('13.000000');
  });
  it('Precision: 2, Seperator: ,, Delimiter: .', function() {
    var out = NumberHelpers.number_with_precision(1111.2345, {separator: ',', precision: 2, delimiter: '.'});
    expect(out).toBe('1.111,23');
  });
  it('strip_insignificant_zeros', function() {
    var out = NumberHelpers.number_with_precision(13, {significant: true, precision: 5, strip_insignificant_zeros: true});
    expect(out).toBe('13');
  });
});
