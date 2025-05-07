> Proszę przetestować ciąg złożony z samych zer oraz plik TRNG_P testami statystycznymi NIST.

> Następnie proszę obliczyć skrót (SHA-3) dla obu plików w taki sposób by uzyskać niezbędna ilość danych do dalszych testów (minimum 13MB). Wyniki działania funkcji skrótu SHA-3 proszę przetestować testami statystycznymi.

> Proszę przygotować program testów tak, aby ciąg wejściowy został podzielony na podciągi o długości 1000_000 bitów (1Mb) i wykonać 100 testów (po jednym dla każdego podciągu).

### Wyniki dla TRNG_P:

* ustawienia testu:
   * 100 bitstreams
   * length: 1000_000

```
------------------------------------------------------------------------------
RESULTS FOR THE UNIFORMITY OF P-VALUES AND THE PROPORTION OF PASSING SEQUENCES
------------------------------------------------------------------------------
   generator is <data/TRNG_P.bit>
------------------------------------------------------------------------------
 C1  C2  C3  C4  C5  C6  C7  C8  C9 C10  P-VALUE  PROPORTION  STATISTICAL TEST
------------------------------------------------------------------------------
  9  10   8  10  12   6  13  13   9  10  0.883171     99/100     Frequency
  6  14   9  11   8  11   7   8   9  17  0.334538     98/100     BlockFrequency
  8  15  12   7   8   9  14   9   8  10  0.657933     99/100     CumulativeSums
 11   8   7   9  10   8  12  13   8  14  0.816537     99/100     CumulativeSums
  6  12  14  11   7  14  10   8   9   9  0.657933    100/100     Runs
 14   5   9  10   8  12  11   4  15  12  0.236810     97/100     LongestRun
  7  10   8   8  11  12  13  12  12   7  0.851383     99/100     Rank
 12   5  11   7  10  11  10  15   8  11  0.637119    100/100     FFT
 12   8  14  11   9   7   9  13   8   9  0.834308    100/100     NonOverlappingTemplate
 15  10  12   6   4  13   9  17  10   4  0.040108     99/100     NonOverlappingTemplate
 11   9   8  11  12  15  10   7   8   9  0.834308    100/100     NonOverlappingTemplate
 11   8  14   3  13  14   9   8  12   8  0.289667     99/100     NonOverlappingTemplate
  5  13   7  11  12  13   9  12  10   8  0.678686    100/100     NonOverlappingTemplate
 11  13  12  10   7   7  11   6  14   9  0.678686     97/100     NonOverlappingTemplate
  9   9   8   7   5  12  10  18   8  14  0.171867    100/100     NonOverlappingTemplate
 12   4  15  10   6  10  13  10  10  10  0.437274     98/100     NonOverlappingTemplate
  6   9   7  13  17  11  13   6  10   8  0.249284    100/100     NonOverlappingTemplate
 16   8  11   7   9  14   7   8  10  10  0.534146     99/100     NonOverlappingTemplate
  8   9  11  12  13   5   8  11   9  14  0.678686     99/100     NonOverlappingTemplate
  9  14   5  14  13   9  10  10  10   6  0.494392    100/100     NonOverlappingTemplate
 17   5   9  11  13   8  14   7  10   6  0.162606     99/100     NonOverlappingTemplate
  9  11   8  10  11   5   5  12  14  15  0.334538     98/100     NonOverlappingTemplate
 13   7  16   6  12   9   9  12   7   9  0.437274     98/100     NonOverlappingTemplate
 10  10   8   4  11  15   9   8  15  10  0.383827     98/100     NonOverlappingTemplate
 12  13  13  12   5   7  10  10   7  11  0.637119     99/100     NonOverlappingTemplate
 15   9   3  11   8  10  13   7  15   9  0.191687     97/100     NonOverlappingTemplate
  7  13  14  12  13   9   7  11   7   7  0.574903     98/100     NonOverlappingTemplate
 11   9  11   9  11  11   9   9   7  13  0.978072    100/100     NonOverlappingTemplate
 11   7   5  11   8  13  14   7  10  14  0.437274    100/100     NonOverlappingTemplate
 18  10  11   8   9  16  13   5   2   8  0.013569     99/100     NonOverlappingTemplate
 11  12   5  10  10  12   9  12   9  10  0.911413     99/100     NonOverlappingTemplate
  8   7  13   8  13  11  11  12  10   7  0.834308     98/100     NonOverlappingTemplate
 17  10  12  12   7   6  11   9   4  12  0.191687     98/100     NonOverlappingTemplate
  9  14   8   9  12   7   8  11  10  12  0.883171     99/100     NonOverlappingTemplate
 10  11   9   8   6  12   9  10  12  13  0.911413     98/100     NonOverlappingTemplate
  9  17  10   8  12   9  11   7   7  10  0.554420     99/100     NonOverlappingTemplate
 13  10   8   7  12   7   8  14  10  11  0.779188     99/100     NonOverlappingTemplate
 11   3  12   6  13  12  10   8  13  12  0.350485     99/100     NonOverlappingTemplate
  9  14  10  13   9   9   8   8  12   8  0.883171     99/100     NonOverlappingTemplate
  5  11   6   2  16  15  11  13  14   7  0.016717    100/100     NonOverlappingTemplate
 15   8  11   9   6  12   8   6  14  11  0.455937     98/100     NonOverlappingTemplate
  7  12   8   9   9  10  11  10  11  13  0.964295    100/100     NonOverlappingTemplate
 11  11   7  10  12  11   7  11   7  13  0.883171     99/100     NonOverlappingTemplate
 12   6  13   6  10  12   9  15  10   7  0.494392     97/100     NonOverlappingTemplate
  8   8   9  11  13  11  11   9   9  11  0.983453     99/100     NonOverlappingTemplate
 13  13   8   8  15   7  10  10   6  10  0.574903     98/100     NonOverlappingTemplate
 13   7  13   7  13  10  10   7  11   9  0.779188     99/100     NonOverlappingTemplate
 11  13   8  16   8   7  11   7  11   8  0.554420    100/100     NonOverlappingTemplate
 15  14  10   8   4  14   6   7  12  10  0.181557     98/100     NonOverlappingTemplate
 12  11   3  10  15  14   5  11  12   7  0.145326     99/100     NonOverlappingTemplate
 11  13  11  10   8   7  10  12   7  11  0.924076     98/100     NonOverlappingTemplate
  6   9  15   9  13   6  10  14   7  11  0.401199     98/100     NonOverlappingTemplate
 15  10  11   8  10   4  10  12  12   8  0.554420    100/100     NonOverlappingTemplate
 11   8  11  10  10  11   6  13  11   9  0.946308     99/100     NonOverlappingTemplate
  7  10   5  11  11  11  10  12  13  10  0.834308    100/100     NonOverlappingTemplate
  9   7  11  13   9  10   5   5  18  13  0.108791    100/100     NonOverlappingTemplate
 10   9  12   8  12   8   5   6  10  20  0.071177     96/100     NonOverlappingTemplate
 10  12  12  10   6  13   7  10  12   8  0.834308    100/100     NonOverlappingTemplate
  8   8  15  15   9   7  10   8   9  11  0.595549    100/100     NonOverlappingTemplate
 12   5  10  13  13   9   8   9   6  15  0.401199     98/100     NonOverlappingTemplate
 10  10  13   9  12  11   8  12   5  10  0.851383     99/100     NonOverlappingTemplate
 11  12   8  10   9  14  12   5   7  12  0.657933     99/100     NonOverlappingTemplate
  9  14  13  11   8  14   8  10   9   4  0.455937     99/100     NonOverlappingTemplate
 12   7   9   9  11   9  13   9  13   8  0.911413     99/100     NonOverlappingTemplate
 12   7   9  15  12  13   5  10   9   8  0.514124    100/100     NonOverlappingTemplate
  7   7   9  10   6  14  12  15  11   9  0.514124    100/100     NonOverlappingTemplate
  9  12   5  13  15   5  11   9   7  14  0.236810     99/100     NonOverlappingTemplate
  9  11   9  11   7   7  10  11  13  12  0.935716     99/100     NonOverlappingTemplate
  9   9  16  10   9  11   5   9  13   9  0.574903    100/100     NonOverlappingTemplate
  5  12  12  15  10   6   8  10   9  13  0.455937    100/100     NonOverlappingTemplate
 12  11  13   9   1  13   9  10  13   9  0.236810     97/100     NonOverlappingTemplate
 10   8  13   8  11  12   9  16   9   4  0.383827     99/100     NonOverlappingTemplate
  9  14  10   8   7  13  11   7  16   5  0.275709     99/100     NonOverlappingTemplate
 11   8   9  11  13   7  11  12  12   6  0.834308     99/100     NonOverlappingTemplate
  9   9   7  12  13  16  10   8   8   8  0.616305    100/100     NonOverlappingTemplate
  9   9   9  13  11  12   9  15   4   9  0.534146     98/100     NonOverlappingTemplate
  8   7  13   9  12  12   5  14  10  10  0.616305    100/100     NonOverlappingTemplate
 16   8   7  11  11  10   9   7   9  12  0.678686    100/100     NonOverlappingTemplate
 17   5   8   8  15   9   7  11  10  10  0.224821     98/100     NonOverlappingTemplate
  6  11  12  10  10  12   7   9   8  15  0.699313     99/100     NonOverlappingTemplate
  7  17   5  15   7  10   6  12  13   8  0.090936     98/100     NonOverlappingTemplate
 11  11  11  11   4   5  12  11  14  10  0.474986     98/100     NonOverlappingTemplate
 12   8  15  10   9   7   8  14   8   9  0.657933    100/100     NonOverlappingTemplate
  7  14   6   7  12  12   9  12   8  13  0.574903    100/100     NonOverlappingTemplate
  7   7  10   8  10  12  13  12  13   8  0.816537     99/100     NonOverlappingTemplate
  9  16  11   9   8  12   6  16   6   7  0.191687     99/100     NonOverlappingTemplate
 13   6   4   9   8   7  11  15  15  12  0.162606     98/100     NonOverlappingTemplate
 16   6   9  11  11  12  12   7  10   6  0.455937     98/100     NonOverlappingTemplate
 14  12   6   8  12  13  14   6   9   6  0.334538    100/100     NonOverlappingTemplate
 11   4  14   8   7   9  11  11  15  10  0.401199    100/100     NonOverlappingTemplate
 17   9  13   8  11   8   7  11  10   6  0.401199     99/100     NonOverlappingTemplate
 12  12  13   7   5  16  11  11   6   7  0.249284     98/100     NonOverlappingTemplate
 15   8  10  15   9   9   7  10  10   7  0.595549     98/100     NonOverlappingTemplate
  7   8  11  10  12  16   7  12  12   5  0.383827     98/100     NonOverlappingTemplate
 14   7   4  16  12  15   6   7  11   8  0.075719     99/100     NonOverlappingTemplate
 12   9   8  12   8   7   8  10  12  14  0.834308     97/100     NonOverlappingTemplate
  7   9   9  13  10  15   6  13  12   6  0.437274     99/100     NonOverlappingTemplate
 10  10  10  17   8   9   5   7  13  11  0.366918     96/100     NonOverlappingTemplate
  6   7  13  16   8   7  12  16   7   8  0.137282    100/100     NonOverlappingTemplate
  9   6   4   9   8  16  14   8  11  15  0.122325     99/100     NonOverlappingTemplate
 14  14   6   4  13  16   6  10  10   7  0.080519     99/100     NonOverlappingTemplate
  6   9  13  10   8   6   7  13  12  16  0.319084     99/100     NonOverlappingTemplate
  9   9  13  12   9  11   4   9  15   9  0.534146    100/100     NonOverlappingTemplate
  9   9  10  11  12  10   7  10  11  11  0.994250     99/100     NonOverlappingTemplate
  5  14   8   9   8  11  13   9   9  14  0.554420    100/100     NonOverlappingTemplate
  6   9   7  10  13  11  12  18   5   9  0.162606     99/100     NonOverlappingTemplate
 12   9   7   9  13   9  12   8   9  12  0.924076     98/100     NonOverlappingTemplate
  7   4  10  10  10  11  12  13   9  14  0.574903     99/100     NonOverlappingTemplate
  4  12  12   6   8  14   9   7  11  17  0.122325     99/100     NonOverlappingTemplate
  8  10   9  12  10   9  14   9   8  11  0.955835    100/100     NonOverlappingTemplate
 10   9   9   8  12   6   9   8  17  12  0.494392     99/100     NonOverlappingTemplate
 11   6  10  13   4  15  16   9   3  13  0.032923     99/100     NonOverlappingTemplate
 10   5   8   8   7  13  12  17   8  12  0.262249    100/100     NonOverlappingTemplate
 11   9   7   8  14  13  11   6   9  12  0.719747     99/100     NonOverlappingTemplate
 11   7   9  12  14   9  14  11   4   9  0.474986     99/100     NonOverlappingTemplate
  8  10   8  15  14   7   8  11   5  14  0.319084     98/100     NonOverlappingTemplate
  5   7  13   8   7  22   5  18   7   8  0.000406    100/100     NonOverlappingTemplate
 10  15   4   7  12  10   8  12   8  14  0.334538     98/100     NonOverlappingTemplate
  9  11   7   8  12  15  13   7   6  12  0.514124    100/100     NonOverlappingTemplate
  9   6  11  10  11  11  12  11   9  10  0.978072    100/100     NonOverlappingTemplate
  8   6  11  13  15  10   5   7  10  15  0.249284     98/100     NonOverlappingTemplate
 16  18  11   7   9   7  11   7   8   6  0.090936     99/100     NonOverlappingTemplate
 12   7  11  10  12   7  12   8   8  13  0.851383     98/100     NonOverlappingTemplate
 11   8  10   6  12  10   8  17  12   6  0.366918     98/100     NonOverlappingTemplate
  8   9   4   7  16  15  10   9   8  14  0.153763    100/100     NonOverlappingTemplate
 10  13  13  16   6  15   6   8   5   8  0.108791     99/100     NonOverlappingTemplate
  8  14   7   8  12  10  14   7  13   7  0.534146     98/100     NonOverlappingTemplate
  7  13  12   6  15  10  15   9   6   7  0.249284     99/100     NonOverlappingTemplate
  9   9  10   9   6  13  15  10   8  11  0.759756     99/100     NonOverlappingTemplate
  9   9  13   7  10  10   9  13  10  10  0.964295     98/100     NonOverlappingTemplate
  8  10   9  10  13  14   9   7  13   7  0.759756    100/100     NonOverlappingTemplate
  8   9  15  13   8  10  11   9   8   9  0.834308    100/100     NonOverlappingTemplate
  7   7  12  12  12  10   9   8  14   9  0.816537     99/100     NonOverlappingTemplate
 11  13  11   7   9   4  12   5  13  15  0.213309     98/100     NonOverlappingTemplate
 10  11  11   7   9  11   7   6  18  10  0.334538    100/100     NonOverlappingTemplate
 11   9  12   6   9  11  14   9   9  10  0.897763     98/100     NonOverlappingTemplate
 15   9  10  16  10   6   9   9   6  10  0.383827    100/100     NonOverlappingTemplate
  6   6  15  10   9   6  13   9  12  14  0.319084    100/100     NonOverlappingTemplate
  7   7  13  14  15   5  12  16   3   8  0.028817     98/100     NonOverlappingTemplate
 12  14   9  12   5   6  18   7  10   7  0.096578     98/100     NonOverlappingTemplate
 12   9   4  14  11   9   8  12  15   6  0.289667     95/100  *  NonOverlappingTemplate
  7  11  13   8  10  10  12   9  11   9  0.964295     99/100     NonOverlappingTemplate
  3   6  10  15  17  10   7  10  13   9  0.071177    100/100     NonOverlappingTemplate
  8   8  14   6  11  12  14  12   6   9  0.514124     99/100     NonOverlappingTemplate
  6   6  16  11  16   7   9  10   9  10  0.236810     98/100     NonOverlappingTemplate
  9  15   9  12   6  10  11   9  12   7  0.719747    100/100     NonOverlappingTemplate
 10  10  16   8  13   9   8   9   6  11  0.616305     99/100     NonOverlappingTemplate
 14   8   8   9  11  11  10   8  11  10  0.955835     96/100     NonOverlappingTemplate
 13  12  10  13   8   7  11   4  13   9  0.514124     98/100     NonOverlappingTemplate
 13   6   7  12  11   3  14   9  14  11  0.202268    100/100     NonOverlappingTemplate
 11   8   8   7  10  13  10  13   8  12  0.883171    100/100     NonOverlappingTemplate
  8  16  10   8  11  11   7  12  11   6  0.574903     99/100     NonOverlappingTemplate
  9   7  11   8  10  10  13  16  10   6  0.574903     99/100     NonOverlappingTemplate
 13  12   8   7  13  13   6  12   7   9  0.595549     99/100     NonOverlappingTemplate
  9   6  17   6  13  11   9  10   7  12  0.304126    100/100     NonOverlappingTemplate
 11  11  11  11   4   5  12  11  14  10  0.474986     98/100     NonOverlappingTemplate
 14   7   9   5  20  11  11   7   6  10  0.037566     99/100     OverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Universal
  8  10  11  10  11  15   9   8   8  10  0.911413    100/100     ApproximateEntropy
  1   1   0   1   1   0   0   0   4   0     ----       8/8       RandomExcursions
  1   1   0   1   1   1   0   1   1   1     ----       8/8       RandomExcursions
  2   1   0   0   0   1   1   2   1   0     ----       8/8       RandomExcursions
  1   0   0   2   1   1   0   3   0   0     ----       8/8       RandomExcursions
  2   0   1   0   0   0   0   2   0   3     ----       7/8       RandomExcursions
  0   2   0   1   0   0   1   1   3   0     ----       8/8       RandomExcursions
  0   1   0   0   1   1   0   3   1   1     ----       8/8       RandomExcursions
  0   0   1   1   0   0   3   0   2   1     ----       8/8       RandomExcursions
  0   2   2   1   1   1   0   0   0   1     ----       8/8       RandomExcursionsVariant
  1   1   1   3   0   0   1   1   0   0     ----       8/8       RandomExcursionsVariant
  1   2   0   2   0   1   1   1   0   0     ----       8/8       RandomExcursionsVariant
  1   2   1   1   0   1   0   2   0   0     ----       8/8       RandomExcursionsVariant
  1   1   3   0   0   0   1   1   0   1     ----       8/8       RandomExcursionsVariant
  1   1   2   0   1   1   0   2   0   0     ----       8/8       RandomExcursionsVariant
  2   0   2   0   0   2   1   0   1   0     ----       8/8       RandomExcursionsVariant
  1   2   0   1   0   1   1   1   1   0     ----       8/8       RandomExcursionsVariant
  2   2   1   0   1   0   1   1   0   0     ----       8/8       RandomExcursionsVariant
  0   0   2   1   1   0   0   1   0   3     ----       8/8       RandomExcursionsVariant
  0   0   2   2   0   0   0   3   0   1     ----       8/8       RandomExcursionsVariant
  0   0   3   1   0   1   2   0   0   1     ----       8/8       RandomExcursionsVariant
  0   1   0   2   1   0   2   1   1   0     ----       8/8       RandomExcursionsVariant
  0   0   2   1   0   1   3   1   0   0     ----       8/8       RandomExcursionsVariant
  0   1   3   0   1   1   0   0   2   0     ----       8/8       RandomExcursionsVariant
  1   1   1   2   0   1   1   0   0   1     ----       8/8       RandomExcursionsVariant
  1   2   0   0   2   1   1   0   0   1     ----       8/8       RandomExcursionsVariant
  1   1   1   0   1   0   1   1   1   1     ----       8/8       RandomExcursionsVariant
  5   9   7  12  11   9  11  14   9  13  0.657933     99/100     Serial
  5  13   6  12  12  11   7  10   7  17  0.181557     99/100     Serial
  8  10   9  11   7  15  10   7  12  11  0.798139    100/100     LinearComplexity


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
The minimum pass rate for each statistical test with the exception of the
random excursion (variant) test is approximately = 96 for a
sample size = 100 binary sequences.

The minimum pass rate for the random excursion (variant) test
is approximately = 7 for a sample size = 8 binary sequences.

For further guidelines construct a probability table using the MAPLE program
provided in the addendum section of the documentation.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```

### Wyniki dla zeros.bin

* plik składa się z samych zer binarnych
* plik 143 MB
* ustawienia testu:
   * 100 bitstreams
   * length: 1000_000


```
------------------------------------------------------------------------------
RESULTS FOR THE UNIFORMITY OF P-VALUES AND THE PROPORTION OF PASSING SEQUENCES
------------------------------------------------------------------------------
   generator is <data/zeros.bin>
------------------------------------------------------------------------------
 C1  C2  C3  C4  C5  C6  C7  C8  C9 C10  P-VALUE  PROPORTION  STATISTICAL TEST
------------------------------------------------------------------------------
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Frequency
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  BlockFrequency
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  CumulativeSums
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  CumulativeSums
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Runs
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  LongestRun
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Rank
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  FFT
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  OverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Universal
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  ApproximateEntropy
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Serial
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Serial
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  LinearComplexity


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
The minimum pass rate for each statistical test with the exception of the
random excursion (variant) test is approximately = 96 for a
sample size = 100 binary sequences.

The minimum pass rate for the random excursion (variant) test is undefined.

For further guidelines construct a probability table using the MAPLE program
provided in the addendum section of the documentation.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```

### Wyniki dla TRNG_P_sha3.bit

* plik 128 MB (tak jak plik TRNG_P)
* hash utworzony w skali 1:1
* ustawienia testu:
   * 100 bitstreams
   * length: 1000_000

```
------------------------------------------------------------------------------
RESULTS FOR THE UNIFORMITY OF P-VALUES AND THE PROPORTION OF PASSING SEQUENCES
------------------------------------------------------------------------------
   generator is <data/TRNG_P_sha3.bit>
------------------------------------------------------------------------------
 C1  C2  C3  C4  C5  C6  C7  C8  C9 C10  P-VALUE  PROPORTION  STATISTICAL TEST
------------------------------------------------------------------------------
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Frequency
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  BlockFrequency
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  CumulativeSums
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  CumulativeSums
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Runs
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  LongestRun
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Rank
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  FFT
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  OverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Universal
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  ApproximateEntropy
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Serial
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Serial
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  LinearComplexity


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
The minimum pass rate for each statistical test with the exception of the
random excursion (variant) test is approximately = 96 for a
sample size = 100 binary sequences.

The minimum pass rate for the random excursion (variant) test is undefined.

For further guidelines construct a probability table using the MAPLE program
provided in the addendum section of the documentation.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```

### Wyniki dla pliku zeros_sha3.bit

* plik 143 MB (tak samo jak plik zeros.bit)
* hash utworzony w skali 1:1
* ustawienia testu:
   * 100 bitstreams
   * length: 1000_000

```
------------------------------------------------------------------------------
RESULTS FOR THE UNIFORMITY OF P-VALUES AND THE PROPORTION OF PASSING SEQUENCES
------------------------------------------------------------------------------
   generator is <data/zeros_sha3.bit>
------------------------------------------------------------------------------
 C1  C2  C3  C4  C5  C6  C7  C8  C9 C10  P-VALUE  PROPORTION  STATISTICAL TEST
------------------------------------------------------------------------------
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Frequency
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  BlockFrequency
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  CumulativeSums
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  CumulativeSums
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Runs
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  LongestRun
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Rank
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  FFT
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
 21  79   0   0   0   0   0   0   0   0  0.000000 *  100/100     NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  NonOverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  OverlappingTemplate
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Universal
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  ApproximateEntropy
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursions
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
  0   0   0   0   0   0   0   0   0   0     ----     ------     RandomExcursionsVariant
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Serial
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  Serial
100   0   0   0   0   0   0   0   0   0  0.000000 *    0/100  *  LinearComplexity


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
The minimum pass rate for each statistical test with the exception of the
random excursion (variant) test is approximately = 96 for a
sample size = 100 binary sequences.

The minimum pass rate for the random excursion (variant) test is undefined.

For further guidelines construct a probability table using the MAPLE program
provided in the addendum section of the documentation.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```

### Skrypt hashujący


1. **Podział pliku na fragmenty**:
   - Plik wejściowy jest odczytywany w całości do bufora.
   - Bufor jest dzielony na fragmenty o stałym rozmiarze (np. 256 bajtów).

2. **Hashowanie fragmentów**:
   - Każdy fragment jest przetwarzany za pomocą algorytmu SHA3-256.
   - Wynik hashowania każdego fragmentu to 32-bajtowy skrót (hash).

3. **Kopiowanie wyników**:
   - Wyniki hashowania (32-bajtowe skróty) są kopiowane do odpowiednich pozycji w buforze wyjściowym, aby zachować strukturę odpowiadającą długości pliku wejściowego.

W efekcie algorytm generuje hash o tej samej długości co plik wejściowy, gdzie każdy fragment pliku jest reprezentowany przez swój skrót SHA3-256.

Skrypt znajduje się:
[skrypt](/szyfrowanie_nodejs/src/lab_sha/generate_sha3.ts)