# Steganografia - raport z eksperymentu

#### Spis treści:

1. [Krotko o Steganografii](#krotko-o-steganografii)
2. [Wyniki dla TRNG_P.bit](#wyniki-dla-trng_pbit)
3. [Wyniki dla plików z ukrytymi danymi](#wyniki-dla-plików-z-ukrytymi-danymi)
   1. [Wyniki dla 1.bit](#wyniki-dla-1bit)
   2. [Wyniki dla 2.bit](#wyniki-dla-2bit)
   3. [Wyniki dla 3.bit](#wyniki-dla-3bit)
   4. [Wyniki dla 4.bit](#wyniki-dla-4bit)
4. [Sposób wprowadzania danych do ciągu losowego](#sposób-wprowadzania-danych-do-ciągu-losowego)
5. [Wnioski](#wnioski)

## Krotko o Steganografii:

Steganografia to dziedzina informatyki koncentrująca się na ukrywaniu samego faktu istnienia tajnych danych wewnątrz innych, pozornie niewinnych nośników. W odróżnieniu od kryptografii, która zabezpiecza treść wiadomości poprzez szyfrowanie, steganografia ma na celu zamaskowanie komunikacji jako takiej. Nośnikami mogą być pliki multimedialne, takie jak obrazy czy dźwięk, a także dokumenty lub nawet ruch sieciowy. Kluczową techniką jest wprowadzanie minimalnych, trudnych do percepcyjnego wykrycia modyfikacji w danych nośnika, na przykład poprzez zmianę najmniej znaczących bitów (LSB) w pikselach obrazu. Zastosowania steganografii obejmują zarówno legalne cele, jak cyfrowe znaki wodne chroniące prawa autorskie, jak i niestety, działania cyberprzestępcze, takie jak ukrywanie złośliwego oprogramowania. Wykrywaniem i analizą ukrytych informacji zajmuje się stegoanaliza, która poszukuje charakterystycznych anomalii w plikach.

### Wyniki dla TRNG_P.bit:

* ustawienia testu:
    * 100 bitstreams
    * length: 1000_000
* wyniki:
  * test zaliczony 

```
------------------------------------------------------------------------------
RESULTS FOR THE UNIFORMITY OF P-VALUES AND THE PROPORTION OF PASSING SEQUENCES
------------------------------------------------------------------------------
   generator is <data/TRNG_P.bit>
------------------------------------------------------------------------------
 C1  C2  C3  C4  C5  C6  C7  C8  C9 C10  P-VALUE  PROPORTION  STATISTICAL TEST
------------------------------------------------------------------------------
  9  12   8  13   9   7  10  10  13   9  0.924076     99/100     Frequency
 10   9   7   9  11   7  13  10   8  16  0.637119    100/100     BlockFrequency
  9  14  10   6  11  13   6  10   7  14  0.494392     99/100     CumulativeSums
  8  15   6  10   7   6  10   9   9  20  0.045675     98/100     CumulativeSums
 13  12  13  10  12  10   8   7  10   5  0.699313    100/100     Runs
 10  12   7   9  18  10   9   7  12   6  0.289667     99/100     LongestRun
 14  11   8   8   5   7  14  12   8  13  0.419021     97/100     Rank
  7  15  13   5  12   6  10  12   9  11  0.401199    100/100     FFT
 12  11  11   8  12   0  10  16   9  11  0.085587    100/100     NonOverlappingTemplate
 11  11  12  11   7   9  12  10  11   6  0.924076     99/100     NonOverlappingTemplate
 10  14   9  12  10   6   4  14  13   8  0.334538     98/100     NonOverlappingTemplate
 14  10  10   8   7  10   7  14  10  10  0.798139     98/100     NonOverlappingTemplate
 10  11  16  11   7  16   7   7   5  10  0.181557     98/100     NonOverlappingTemplate
 14   8  13  10  10   7  10   8  15   5  0.419021     99/100     NonOverlappingTemplate
  6  14   7   9  12  12  11   8  10  11  0.779188    100/100     NonOverlappingTemplate
 11   8   7  12  13   9  11   7   7  15  0.616305     98/100     NonOverlappingTemplate
  4   8  12  14  10  10  10   9  11  12  0.678686     99/100     NonOverlappingTemplate
 14   4   7  17   9  11  10  11   8   9  0.224821     99/100     NonOverlappingTemplate
  4   8  16  13  10   9  12  12  11   5  0.213309    100/100     NonOverlappingTemplate
  6  10  12  16   8  10   9  11  12   6  0.514124     98/100     NonOverlappingTemplate
  5   9  10   7   5   8   8  15  18  15  0.032923     99/100     NonOverlappingTemplate
 15   7  11  11  12   8   7   7   8  14  0.514124     98/100     NonOverlappingTemplate
  8  14  11   8   9   8  12  14   9   7  0.739918    100/100     NonOverlappingTemplate
 11   9   9   8  12   9  10  13  10   9  0.987896     98/100     NonOverlappingTemplate
  9   8  10  16   9  12   8  11  10   7  0.739918    100/100     NonOverlappingTemplate
  8  13  12   4  16  12   8  12   5  10  0.181557     99/100     NonOverlappingTemplate
  8  14   7  11  13  10   8  10   9  10  0.883171    100/100     NonOverlappingTemplate
  9  12  13   8  12   7  12   9  12   6  0.779188     99/100     NonOverlappingTemplate
  7   8   9  12  12   7  13   7  15  10  0.595549     99/100     NonOverlappingTemplate
  5  19   8   9  12   7  12  10   9   9  0.162606     99/100     NonOverlappingTemplate
  9  14  10  11   8  13   8  10   8   9  0.911413    100/100     NonOverlappingTemplate
  9   9  10  16  11  10   7  11  11   6  0.678686    100/100     NonOverlappingTemplate
  7  12  13  11   8  10  10  12  11   6  0.851383     99/100     NonOverlappingTemplate
 14  13   8  12   5   7   9   9  15   8  0.366918     98/100     NonOverlappingTemplate
  5   8  16   3   6  13  10  14  12  13  0.051942     99/100     NonOverlappingTemplate
 10   9  11  12  10   9   8   8  11  12  0.991468     97/100     NonOverlappingTemplate
 11   5   9  11  10  15   7   7  10  15  0.383827     99/100     NonOverlappingTemplate
 10  10   7  12   6  13   7  11  12  12  0.779188     99/100     NonOverlappingTemplate
 10  12  11   9   7   8   9  14   8  12  0.883171    100/100     NonOverlappingTemplate
 14   5   8   5  10  13  13  13   5  14  0.129620     96/100     NonOverlappingTemplate
  9  11   7  14   6  10  11  11   9  12  0.834308    100/100     NonOverlappingTemplate
  3  11  11  13  10  12  13   8   7  12  0.437274    100/100     NonOverlappingTemplate
 15  12  11   7  10   7  11   8  10   9  0.798139    100/100     NonOverlappingTemplate
 14  13  11  12   7   5   8  12   7  11  0.514124     99/100     NonOverlappingTemplate
  8  10  12   5  15   6  11  12   8  13  0.419021    100/100     NonOverlappingTemplate
 16   8   9   4  13   8  10  11  11  10  0.419021     98/100     NonOverlappingTemplate
  9  11   9   6  10  10  10  10  13  12  0.955835     99/100     NonOverlappingTemplate
 15  10  10   9   8   6  13  11   8  10  0.739918     98/100     NonOverlappingTemplate
  7  14   5  10   8  11  10  13  10  12  0.657933    100/100     NonOverlappingTemplate
 11  10   7   8   6  11  15  10  13   9  0.678686     99/100     NonOverlappingTemplate
  8   6   9  16   6   8  12  16   5  14  0.071177     99/100     NonOverlappingTemplate
  8  13   9  13   6   9   9  10   9  14  0.759756     99/100     NonOverlappingTemplate
 14   5   9  12   7  10   9  15  11   8  0.474986     99/100     NonOverlappingTemplate
 10  14   7   5  13  11  11   8  12   9  0.637119     99/100     NonOverlappingTemplate
  8  13   8   8  14   9  10   8   8  14  0.719747     98/100     NonOverlappingTemplate
  7  10   7   9   6  11  12  11  11  16  0.554420     99/100     NonOverlappingTemplate
  7   6  13  10   9  16  10   7  12  10  0.494392     98/100     NonOverlappingTemplate
 14   8   5  12  10   8  14  10  11   8  0.595549     98/100     NonOverlappingTemplate
 17  11  12   6   8  13   6  11   7   9  0.275709     97/100     NonOverlappingTemplate
 13  10   9  11   5  10  11  11   6  14  0.637119    100/100     NonOverlappingTemplate
 15  12   4  15   9   7   7  12   9  10  0.249284     99/100     NonOverlappingTemplate
 10  12  10   7  12  12   4  12  13   8  0.595549     99/100     NonOverlappingTemplate
  8  13  17  10  11   8  10   8   6   9  0.455937     98/100     NonOverlappingTemplate
 12   9  12  15   8  11   7   6   8  12  0.616305    100/100     NonOverlappingTemplate
  8   9  11   6  14   9  13  12   8  10  0.779188     99/100     NonOverlappingTemplate
 10   6  10  11   8  15  14   5  10  11  0.455937     99/100     NonOverlappingTemplate
 11  12  12  12   9  13   7  11   7   6  0.759756    100/100     NonOverlappingTemplate
 17  10  15   8   7  13   9   6   8   7  0.181557     98/100     NonOverlappingTemplate
 10  14   7   9  12   9  10   6   9  14  0.699313    100/100     NonOverlappingTemplate
  3   9  12   8  11  10  12  12   9  14  0.494392     99/100     NonOverlappingTemplate
 17   6  12   5  10   8  15   9  10   8  0.171867     97/100     NonOverlappingTemplate
  8  12  11  13  10   4  11   6  12  13  0.494392     99/100     NonOverlappingTemplate
  9  10   9   9  14   6  15  10   5  13  0.401199    100/100     NonOverlappingTemplate
 11  12   6  12   4   9  12  16   3  15  0.040108    100/100     NonOverlappingTemplate
  8   6   8  13  13  13   7  10  11  11  0.719747     99/100     NonOverlappingTemplate
 11  11   7   9   9  14   8   7  14  10  0.759756    100/100     NonOverlappingTemplate
 11   9   9  10   9  12  14  11   3  12  0.554420     99/100     NonOverlappingTemplate
  7  14  12  13  10   7   8  10  12   7  0.699313    100/100     NonOverlappingTemplate
 10   7  11  11   8  11   9  11  15   7  0.816537     99/100     NonOverlappingTemplate
  6  18   6  16   9  14   6   8   5  12  0.019188    100/100     NonOverlappingTemplate
 15  14  11   9  11   7   6  11  10   6  0.474986     98/100     NonOverlappingTemplate
 11   8  19   4   8   8  12   6  11  13  0.066882    100/100     NonOverlappingTemplate
 12  11  11   8  12   0  10  15  10  11  0.122325    100/100     NonOverlappingTemplate
 10  11   9   6  10   5   8  12  18  11  0.236810    100/100     NonOverlappingTemplate
 16  10   8   9  13  10  12   6   7   9  0.534146     96/100     NonOverlappingTemplate
 12   6  11  13  11  11   3   8  15  10  0.275709     99/100     NonOverlappingTemplate
  9   5  16   9   6  12   7  11  15  10  0.224821     99/100     NonOverlappingTemplate
 17  14   4  11   8   7  11  11   9   8  0.202268    100/100     NonOverlappingTemplate
 11   7   9   7  13   8  12  11  14   8  0.759756     99/100     NonOverlappingTemplate
  7   9  11  14   5   7  10  15  11  11  0.455937     98/100     NonOverlappingTemplate
 12  11   8   9   8  15   8  10   7  12  0.779188    100/100     NonOverlappingTemplate
 13   8  10  14   6  13  14   6  10   6  0.334538     99/100     NonOverlappingTemplate
  8   6  10  13  14   8  12   9   7  13  0.616305     99/100     NonOverlappingTemplate
  9  11   8   9  13   7  11  13   7  12  0.851383     99/100     NonOverlappingTemplate
 12   6   7  12  15   7  12  11   6  12  0.419021     98/100     NonOverlappingTemplate
  9  10   6  14   6  11  11   9  17   7  0.275709     99/100     NonOverlappingTemplate
 11  13  15   5   9  15  10   7   8   7  0.289667    100/100     NonOverlappingTemplate
  9  10   9  12  14   7   7  10   8  14  0.739918     99/100     NonOverlappingTemplate
  9   8  19  10  10  13   9   3  10   9  0.102526    100/100     NonOverlappingTemplate
 12   8  10  14  11   8  11  11   6   9  0.851383    100/100     NonOverlappingTemplate
 10   7  18   7   5  11  11  15  11   5  0.066882     99/100     NonOverlappingTemplate
  7  12   8  12  11  15  12   8   5  10  0.534146     97/100     NonOverlappingTemplate
  9   9   4  13   7   7  10  15  12  14  0.275709     99/100     NonOverlappingTemplate
  8  11  11  12  20   8   4   8  14   4  0.014550     99/100     NonOverlappingTemplate
 11   8   6   7  11  12   8  13  14  10  0.699313     97/100     NonOverlappingTemplate
 10  12  12   5  10   9  12  11  10   9  0.911413     98/100     NonOverlappingTemplate
  9  11  10  12   9  12   7  10  12   8  0.971699    100/100     NonOverlappingTemplate
  8  12  12   9   3  12  15   8  10  11  0.383827     99/100     NonOverlappingTemplate
 13   6   9  12  12  11   8   9  13   7  0.759756     98/100     NonOverlappingTemplate
  4  15  10   7  15   9  10   7   6  17  0.048716     99/100     NonOverlappingTemplate
 11   8   6  17   5  12  10  10   9  12  0.319084     97/100     NonOverlappingTemplate
 11   9   8  12  12   2   7  16   9  14  0.122325     98/100     NonOverlappingTemplate
  7  10  11   9  12   8  11  15   9   8  0.834308    100/100     NonOverlappingTemplate
  8  14   9  13  12   8   5  11  12   8  0.616305    100/100     NonOverlappingTemplate
  4  12  13   9  13   7   5  13   7  17  0.066882    100/100     NonOverlappingTemplate
  8  10  12  10   9  12  10   9  11   9  0.996335     99/100     NonOverlappingTemplate
  9   6  10   8  12  10  13  16   8   8  0.554420     99/100     NonOverlappingTemplate
 11  10   8   7  13  10   9  10  11  11  0.978072     98/100     NonOverlappingTemplate
 11  14  11   8   9   4   9  13  10  11  0.637119     98/100     NonOverlappingTemplate
 11  12  11   8   9   9  10  10  12   8  0.991468     98/100     NonOverlappingTemplate
 13  12  11  15  12   4   8   7  11   7  0.334538     98/100     NonOverlappingTemplate
 11  10  12   5   8  12   8  13   9  12  0.779188    100/100     NonOverlappingTemplate
 12  12   5   8   8  13  10   9  16   7  0.383827    100/100     NonOverlappingTemplate
  8   6   7  15  11  14  10   8  12   9  0.534146     98/100     NonOverlappingTemplate
 14  13   9   5   4   9   9  13  14  10  0.249284     99/100     NonOverlappingTemplate
  9   7   9   9  12  12  10  13   8  11  0.946308     98/100     NonOverlappingTemplate
 11  14  15   4  12  12   7   8  10   7  0.289667     97/100     NonOverlappingTemplate
 14  12  12  12   6   4  12   1  15  12  0.021999     98/100     NonOverlappingTemplate
  6  14  12   9  15  12   5  12   7   8  0.289667     99/100     NonOverlappingTemplate
 11  13  16   8   7   6  11   8   9  11  0.514124     99/100     NonOverlappingTemplate
  9   7  11   9  13  14  11   5   7  14  0.455937    100/100     NonOverlappingTemplate
 10   9   8   9   8  12   9   8  13  14  0.883171    100/100     NonOverlappingTemplate
  9   8  12  11   8  14  10   7   8  13  0.816537    100/100     NonOverlappingTemplate
  9   8   5   7   6  15  10  10  15  15  0.162606     99/100     NonOverlappingTemplate
 13   9  10   9  11  13  12   7   8   8  0.897763     98/100     NonOverlappingTemplate
 11  10  15  14  12   9   9   5   6   9  0.437274     98/100     NonOverlappingTemplate
  9  12   6  10  15  12   9   4  12  11  0.419021     99/100     NonOverlappingTemplate
 16  10   9   8  11   6   8   6  12  14  0.366918     99/100     NonOverlappingTemplate
 13   7   8   9  12  12   9  10   8  12  0.911413     99/100     NonOverlappingTemplate
 11  10   7  14   9   7  11   9  14   8  0.759756     99/100     NonOverlappingTemplate
 13  11  15   7  10  10   6  13   8   7  0.514124     97/100     NonOverlappingTemplate
 11   5  14   8  10  11   9   7  18   7  0.162606     98/100     NonOverlappingTemplate
  7   6  19  11   7   5   9  11   9  16  0.035174    100/100     NonOverlappingTemplate
 10   9   8  12  13   9   6  10   9  14  0.816537     98/100     NonOverlappingTemplate
  6  14  13   9   6  12  12   9  10   9  0.657933    100/100     NonOverlappingTemplate
  9  10   8  11   9  10  14   6  15   8  0.657933     98/100     NonOverlappingTemplate
 13   8  11  11   9   6  15   5  10  12  0.474986     99/100     NonOverlappingTemplate
 13   8   7  12  14  10  10  10  10   6  0.759756     99/100     NonOverlappingTemplate
  6  13   7  12   6  18   8   8  11  11  0.171867     99/100     NonOverlappingTemplate
 12   7   9   8   9  13   6   8  15  13  0.514124     98/100     NonOverlappingTemplate
  6  10  14  14   9   7   9   6  15  10  0.350485    100/100     NonOverlappingTemplate
  7  11  13   9  13  15   9   9   4  10  0.419021    100/100     NonOverlappingTemplate
  7   9  11  10  14  17   5   4  12  11  0.115387     99/100     NonOverlappingTemplate
 11   8  10  13   9   7  13   5   9  15  0.494392     99/100     NonOverlappingTemplate
 12   5   8  11  12   7  12  13  12   8  0.657933    100/100     NonOverlappingTemplate
 11   8  19   4   8   8  12   6  11  13  0.066882    100/100     NonOverlappingTemplate
 12  10  10  11  11  11  10   8   8   9  0.996335     99/100     OverlappingTemplate
 10   7  12   6  13   9  13   9   8  13  0.719747     99/100     Universal
 16   7  14   6   6  18   3  13   7  10  0.007694     97/100     ApproximateEntropy
  6   8   6   4   6   4   5   5   6   5  0.964295     54/55      RandomExcursions
  6   6   3   7   2   7   5  11   3   5  0.181557     55/55      RandomExcursions
  4   4   7   8   3   8   3   5   7   6  0.595549     55/55      RandomExcursions
  4   5   5   8   5   6   5   5   8   4  0.897763     55/55      RandomExcursions
  6   1   8   5   8   3   7   3   9   5  0.181557     55/55      RandomExcursions
  8   6   6   7   6   4   4   6   5   3  0.867692     54/55      RandomExcursions
  6   7   7   3   3   4   5   7   9   4  0.554420     53/55      RandomExcursions
  7   5   6   4   3  12   4   5   5   4  0.202268     55/55      RandomExcursions
  5   8   8   8   7   6   2   4   4   3  0.401199     54/55      RandomExcursionsVariant
  6   4   9   8  10   5   5   3   4   1  0.102526     55/55      RandomExcursionsVariant
  5   6   6   9   8   7   3   6   3   2  0.366918     55/55      RandomExcursionsVariant
  8   5   5   9   8   5   3   3   5   4  0.474986     54/55      RandomExcursionsVariant
  9   5   6   7   4   4   4   5   6   5  0.834308     54/55      RandomExcursionsVariant
  6   5   8   5   7   6   5   4   5   4  0.946308     55/55      RandomExcursionsVariant
  3   9   9   6   6   5   4   5   6   2  0.366918     54/55      RandomExcursionsVariant
  5   3   8   9   8   8   5   2   2   5  0.162606     54/55      RandomExcursionsVariant
  6   1   5   8   6   6  10   3   2   8  0.090936     55/55      RandomExcursionsVariant
  6   7   5   3   5   3  12   7   4   3  0.115387     55/55      RandomExcursionsVariant
  4   7   6   6   4  11   4   7   3   3  0.249284     55/55      RandomExcursionsVariant
  4  10   6   8   6   5   4   3   4   5  0.474986     55/55      RandomExcursionsVariant
  5   7   9   5   6   7   7   1   2   6  0.275709     55/55      RandomExcursionsVariant
  4   9   7   7   4   5   3   4   7   5  0.637119     55/55      RandomExcursionsVariant
  3   8   7  10   6   1   5   7   4   4  0.162606     55/55      RandomExcursionsVariant
  5   3  10   9   3   4   4   6   1  10  0.028817     55/55      RandomExcursionsVariant
  6   3   7  10   2   4   6   4   8   5  0.275709     55/55      RandomExcursionsVariant
  5   4   7   8   6   2   9   7   2   5  0.304126     55/55      RandomExcursionsVariant
 13  14   1  10   8  22   2  11  12   7  0.000123     97/100     Serial
  9   9  14  12  10   8   9   9  10  10  0.971699     99/100     Serial
 11  11   9  12  12   8   8   8  11  10  0.983453     99/100     LinearComplexity


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
The minimum pass rate for each statistical test with the exception of the
random excursion (variant) test is approximately = 96 for a
sample size = 100 binary sequences.

The minimum pass rate for the random excursion (variant) test
is approximately = 52 for a sample size = 55 binary sequences.

For further guidelines construct a probability table using the MAPLE program
provided in the addendum section of the documentation.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

```

## Wyniki dla plików z ukrytymi danymi

#### Informacje o plikach:

1. block_size=400, golomb_order=4
2. block_size=300, golomb_order=4
3. block_size=600, golomb_order=4
4. block_size=800, golomb_order=4

### Wyniki dla 1.bit


* ustawienia testu:
    * 100 bitstreams
    * length: 1000_000
* wyniki:
  * Testy częściowo nie zaliczone

```
------------------------------------------------------------------------------
RESULTS FOR THE UNIFORMITY OF P-VALUES AND THE PROPORTION OF PASSING SEQUENCES
------------------------------------------------------------------------------
   generator is <data/1.bit>
------------------------------------------------------------------------------
 C1  C2  C3  C4  C5  C6  C7  C8  C9 C10  P-VALUE  PROPORTION  STATISTICAL TEST
------------------------------------------------------------------------------
 10  10  14   7   7   7  11  14  10  10  0.739918     99/100     Frequency
 10  12   5   7  13   7  11  12   7  16  0.304126    100/100     BlockFrequency
 11  11  12   9  10   6  11  10   5  15  0.595549    100/100     CumulativeSums
 10   8   9  10   9  11   7  12  13  11  0.964295     99/100     CumulativeSums
 13  13  14  10   9   7   6   9  11   8  0.678686    100/100     Runs
  9  10   8  16  14   8  14   5   9   7  0.262249    100/100     LongestRun
  7  13   6  14   6  11   8  12  12  11  0.534146    100/100     Rank
  9   9   7  16  12  12   6   8   9  12  0.534146     99/100     FFT
 12  11  11   9   9   3   9  11  15  10  0.494392    100/100     NonOverlappingTemplate
  8  12   7   9  18   8   8   8  16   6  0.102526     98/100     NonOverlappingTemplate
 13  10  10  12  11   8   5   9  15   7  0.554420    100/100     NonOverlappingTemplate
 12  10   8  11   6  13   9  13   7  11  0.798139     99/100     NonOverlappingTemplate
 12  10  17   6  14  12   8   5   7   9  0.171867    100/100     NonOverlappingTemplate
 10  12  12  10  10   8   7  13  11   7  0.911413     99/100     NonOverlappingTemplate
  8  13  10   8   6  13   8  10  12  12  0.798139    100/100     NonOverlappingTemplate
 10   8   4  10  12  11  13  10   8  14  0.595549    100/100     NonOverlappingTemplate
  6   7  13   9  11   7  19   5  13  10  0.066882     99/100     NonOverlappingTemplate
  8  12  11  13   9   8   9  10  10  10  0.983453     99/100     NonOverlappingTemplate
  6  10  11  10  11  11  15  11   8   7  0.759756    100/100     NonOverlappingTemplate
  7   9  10  10  12  13  19   9   3   8  0.071177     98/100     NonOverlappingTemplate
  5   4  15  10   5   6   9  11  15  20  0.002559     99/100     NonOverlappingTemplate
 10  13  15   7   6  14   7   8   9  11  0.437274     97/100     NonOverlappingTemplate
 11   9  15   9   8  11  10   7   9  11  0.883171     99/100     NonOverlappingTemplate
 13  14   5   5   8  17  10   8  11   9  0.145326     98/100     NonOverlappingTemplate
 10   9   9  11  11  12  14  11   8   5  0.798139    100/100     NonOverlappingTemplate
 12   8   7  10   8  20   9  10   8   8  0.162606    100/100     NonOverlappingTemplate
  8  12   8  17   7  10   7  13   7  11  0.366918     99/100     NonOverlappingTemplate
  9  13  11  11   8  14   5  10  14   5  0.366918     99/100     NonOverlappingTemplate
  4   9  11   6  12  14  13  11   9  11  0.474986     99/100     NonOverlappingTemplate
  8  11  17   4   8  16  10  10   7   9  0.122325     99/100     NonOverlappingTemplate
 12   8  13   5  14   5  12  15   6  10  0.171867     99/100     NonOverlappingTemplate
  6  15  14   8  11  13   9  10   8   6  0.419021    100/100     NonOverlappingTemplate
  6  17  11  13   9   9   5  10  11   9  0.319084    100/100     NonOverlappingTemplate
 12  12  13  12   6   7   7  17   8   6  0.191687     99/100     NonOverlappingTemplate
  4  13   5   9   7  11  11  18  12  10  0.090936     99/100     NonOverlappingTemplate
 12   9  13   7   9  10   8  10   8  14  0.851383     97/100     NonOverlappingTemplate
  8   9   7   8  10  15  10  12   7  14  0.616305     99/100     NonOverlappingTemplate
 10  11  11   4   9   9  10  11  15  10  0.678686     99/100     NonOverlappingTemplate
 13   9   4  11  11  11  10  11  11   9  0.816537    100/100     NonOverlappingTemplate
 13   4   8  11   8  11  13  15   9   8  0.401199     97/100     NonOverlappingTemplate
  8  11   8  12   9  12   9  12  11   8  0.971699    100/100     NonOverlappingTemplate
  1  11  17  12   9  13   7  12   9   9  0.066882    100/100     NonOverlappingTemplate
 14  10  13   9   6  16   7  10   8   7  0.350485     99/100     NonOverlappingTemplate
 14  17  10   7   8   9  10   8   5  12  0.262249     98/100     NonOverlappingTemplate
  7   9  12  15  14   6   8   3  11  15  0.090936    100/100     NonOverlappingTemplate
 12  12   8   6  13   7  11   9  11  11  0.834308     98/100     NonOverlappingTemplate
 10   9  11   6  14  13   6   5  12  14  0.319084    100/100     NonOverlappingTemplate
 15  10  12   7  10   7  12   9   4  14  0.319084     99/100     NonOverlappingTemplate
  8   6  17   6   9  13   8   9  19   5  0.014550    100/100     NonOverlappingTemplate
 11   8   8   7  13  13  10   9  12   9  0.897763    100/100     NonOverlappingTemplate
 10   7  11  11  11   9  10  13   7  11  0.955835    100/100     NonOverlappingTemplate
  7  17   8  11   9  12  12   7   4  13  0.181557     98/100     NonOverlappingTemplate
 10  16   6   3  13   5   9  12  15  11  0.055361     98/100     NonOverlappingTemplate
  9  18   5  10  12  12   7  10   8   9  0.262249     99/100     NonOverlappingTemplate
  5  12   8  14   7  15   9  13   6  11  0.275709     98/100     NonOverlappingTemplate
  9  10   5   8   8  14  11  11  10  14  0.657933     99/100     NonOverlappingTemplate
  7   6   8  14  17   9   9  10  11   9  0.366918     97/100     NonOverlappingTemplate
 11   9   4  10  11  13   9  15   7  11  0.494392     95/100  *  NonOverlappingTemplate
 17  11   8   9  11  13   9   6   8   8  0.437274     99/100     NonOverlappingTemplate
 11  14  10   7  10   9   8   5  12  14  0.574903     98/100     NonOverlappingTemplate
 14  16   9   5  12   9   8   4  10  13  0.153763     98/100     NonOverlappingTemplate
 11  11  11   8   8   9  12  12  11   7  0.964295     99/100     NonOverlappingTemplate
 10  11  13  11  12   9  13   5   7   9  0.739918     99/100     NonOverlappingTemplate
 11   9  16  18   7   6   8   7   7  11  0.090936     99/100     NonOverlappingTemplate
  5  10   9  10  17   9   9  14   7  10  0.334538     99/100     NonOverlappingTemplate
 10   6  13   6  14  11   8  11  12   9  0.657933     98/100     NonOverlappingTemplate
 13  14   9   9  15   7  12   8   2  11  0.145326     99/100     NonOverlappingTemplate
 15  12   9  16   5   7  12   6  10   8  0.191687     96/100     NonOverlappingTemplate
 11  11   9   6  11   8  10   7  19   8  0.224821    100/100     NonOverlappingTemplate
  6   4  13   8  11  13   7   9  17  12  0.129620    100/100     NonOverlappingTemplate
  8  15  12  11   9  11   6   8   9  11  0.759756     98/100     NonOverlappingTemplate
 10   3  18  14   9   4   8  12  13   9  0.030806     98/100     NonOverlappingTemplate
 12   6   7  11  11  10   9  11  13  10  0.897763    100/100     NonOverlappingTemplate
 11  11   7  12   9  11  10   8   9  12  0.978072     98/100     NonOverlappingTemplate
  8   5  10  11  13  14   9  12   7  11  0.637119     99/100     NonOverlappingTemplate
 13   6  12   8   5   9  15  12   9  11  0.437274    100/100     NonOverlappingTemplate
  9  11   9  10   7  17  12  10   6   9  0.514124     98/100     NonOverlappingTemplate
 10  10   7  15  11  13   8  12   6   8  0.616305     98/100     NonOverlappingTemplate
  9   9  10   9   9  12   7   9  18   8  0.474986     99/100     NonOverlappingTemplate
  6  15   9  15   6  11   7  14   9   8  0.249284    100/100     NonOverlappingTemplate
 17   7  11  15  10   9   8  10   7   6  0.249284     98/100     NonOverlappingTemplate
 10  12   9  10   7  10  10   7  13  12  0.935716     98/100     NonOverlappingTemplate
 13  10  11   9   8   4   8  12  15  10  0.494392    100/100     NonOverlappingTemplate
  8  11   8  12   6  10   7   9  17  12  0.419021     99/100     NonOverlappingTemplate
 14   7   9  14   8  13   9   7   8  11  0.637119     95/100  *  NonOverlappingTemplate
 13  10   8   6  11  12  10   8  10  12  0.897763     99/100     NonOverlappingTemplate
  8   7  10  11  14  11   6  11  13   9  0.759756     97/100     NonOverlappingTemplate
 15   8  13   7   8   9  13  10  11   6  0.554420    100/100     NonOverlappingTemplate
  9   8   9  13   9   5  11  15  14   7  0.419021     99/100     NonOverlappingTemplate
  8  11  13   9   8   7  12  10   9  13  0.897763     99/100     NonOverlappingTemplate
  9   8  13   8  10   9   9   8  14  12  0.883171     99/100     NonOverlappingTemplate
  7  16  10  10   4  18  11  11   3  10  0.020548    100/100     NonOverlappingTemplate
  6   8  10  12  16   9   6  12   9  12  0.474986    100/100     NonOverlappingTemplate
 10  10   4  14  11  11   8   9  12  11  0.699313     99/100     NonOverlappingTemplate
 11   8   9  12  13   9   8  10  10  10  0.983453     99/100     NonOverlappingTemplate
 10   6  11  10   9  14  11  11  10   8  0.911413    100/100     NonOverlappingTemplate
  8  14  16  10  11  12  10   5   7   7  0.319084     99/100     NonOverlappingTemplate
  9  12  12  12   8   9  12   2  10  14  0.334538     99/100     NonOverlappingTemplate
 13   7  10  16  10   9  11   6   9   9  0.595549    100/100     NonOverlappingTemplate
  9  14  10  14   5   9   7  10  18   4  0.051942    100/100     NonOverlappingTemplate
 10   7  14  10   8  11  12   8  12   8  0.867692     98/100     NonOverlappingTemplate
  9   5  13  10  13  15  10   9   9   7  0.534146     98/100     NonOverlappingTemplate
 10   8   6   8  10   4  12  14  12  16  0.213309     99/100     NonOverlappingTemplate
  8  13   8  17  13   8  12   8   6   7  0.262249     99/100     NonOverlappingTemplate
 12   8   5   5  10  12  12  13  12  11  0.534146     98/100     NonOverlappingTemplate
 10  13   9   9   5  13   8  10  12  11  0.798139     99/100     NonOverlappingTemplate
 10  10   9  11  10  13  12   8   9   8  0.983453    100/100     NonOverlappingTemplate
 10   7   8  11   9   8  12  16  12   7  0.616305     99/100     NonOverlappingTemplate
 15   7   8   8  11  12  16  10   7   6  0.289667     98/100     NonOverlappingTemplate
 11  10   9  10   6   9  12   8  11  14  0.883171     99/100     NonOverlappingTemplate
 10  11   7  10  12   7  14  11  10   8  0.883171     98/100     NonOverlappingTemplate
 10  13  10   8   8   7   8  12   9  15  0.739918    100/100     NonOverlappingTemplate
  8   9  10  11   9  11  12  12  10   8  0.991468    100/100     NonOverlappingTemplate
  6  14   9  10  13  10   7  16   6   9  0.319084     99/100     NonOverlappingTemplate
  2  13  12  14   9   9   5  10  11  15  0.102526    100/100     NonOverlappingTemplate
  7   5   8  19   5  12  10  10  19   5  0.002559     97/100     NonOverlappingTemplate
  8   7   8  10   9  13  12  12  12   9  0.911413     99/100     NonOverlappingTemplate
 12  11  10   6   6  14   6   7  16  12  0.224821     98/100     NonOverlappingTemplate
  9  15  11  10   6   8   9  14   9   9  0.678686    100/100     NonOverlappingTemplate
 12  14   9   7   6  10  13   8  10  11  0.739918     98/100     NonOverlappingTemplate
 14  11  15  14  10   8   6   6   3  13  0.085587     98/100     NonOverlappingTemplate
 13   8   6  10   8   6  16  10  12  11  0.437274     98/100     NonOverlappingTemplate
 12  12  10   6   7  10  12  13  10   8  0.834308     99/100     NonOverlappingTemplate
  6   8  11   8  14   8  15  11  11   8  0.574903     98/100     NonOverlappingTemplate
 12  12  11   6   9  10   5  12  14   9  0.616305     99/100     NonOverlappingTemplate
 10   6  12   9  12  14   8   5  15   9  0.383827     98/100     NonOverlappingTemplate
 13  12  10  12   6  10  11  12   5   9  0.699313     97/100     NonOverlappingTemplate
 15  13   7  15   7   5  10   7  12   9  0.236810     97/100     NonOverlappingTemplate
  7  11  11  16  11  10   7   9  10   8  0.719747     99/100     NonOverlappingTemplate
 13  10  14   9   6  10   8  11   6  13  0.616305     98/100     NonOverlappingTemplate
  8  10   9   9  11  20   6  10   4  13  0.051942     99/100     NonOverlappingTemplate
  7   7  12  12   9   7  11  14  10  11  0.798139    100/100     NonOverlappingTemplate
  9  12   6  13   6  10  13   7  14  10  0.534146    100/100     NonOverlappingTemplate
  8   6   6  10   9  10  11   9  13  18  0.262249    100/100     NonOverlappingTemplate
 10  10  14   9  12   8  11  11   5  10  0.816537     98/100     NonOverlappingTemplate
 13  12  14  12  10   6   6  11   7   9  0.574903     98/100     NonOverlappingTemplate
  6  10  16   8  13  10   9   9   6  13  0.419021     97/100     NonOverlappingTemplate
 14  16   7  14   5   4   7   8   8  17  0.015598    100/100     NonOverlappingTemplate
 12   7   7  12  15  10   9   6  12  10  0.616305     98/100     NonOverlappingTemplate
 11  11   7  11   9  10   5  16  10  10  0.595549     99/100     NonOverlappingTemplate
 10  15   8  13  12   7   7   6   9  13  0.474986     98/100     NonOverlappingTemplate
  9  10  11   8   9  11   5  16  10  11  0.637119     98/100     NonOverlappingTemplate
  9  10  10  10   6   9  10  12  15   9  0.851383    100/100     NonOverlappingTemplate
 14   9   9  11  14   4  10   6  10  13  0.383827     97/100     NonOverlappingTemplate
  7  15  10   7   5  10  14  11  13   8  0.366918    100/100     NonOverlappingTemplate
  8  11   9  11  10  11   8  12  12   8  0.983453     98/100     NonOverlappingTemplate
 10  10  13  11   7  10   8   7  10  14  0.851383     98/100     NonOverlappingTemplate
 14  10   6  15  10   7  10  12  11   5  0.383827     98/100     NonOverlappingTemplate
  6  11   8   9  12  15  10   7  10  12  0.699313    100/100     NonOverlappingTemplate
 12   5   9  10   8  13   8  10  13  12  0.739918     98/100     NonOverlappingTemplate
  8   9  13  10  14   6  11  10   8  11  0.816537    100/100     NonOverlappingTemplate
  5  13  10  15  15   9   6  14   2  11  0.032923    100/100     NonOverlappingTemplate
  7   7  13  16   4  10  13   8  10  12  0.236810    100/100     NonOverlappingTemplate
 10   8  12  13   9   5   9  14   5  15  0.275709     99/100     NonOverlappingTemplate
 11   8  11   8  11   6  15  10  13   7  0.637119    100/100     NonOverlappingTemplate
 10  12   9  10   7  10  10   7  13  12  0.935716     98/100     NonOverlappingTemplate
 11   7  13  13   8  13   9   8   7  11  0.779188     99/100     OverlappingTemplate
 11   5   8  15  12  11   6  14   5  13  0.181557     99/100     Universal
 14   6  10  15   8   9   9  12   9   8  0.616305     99/100     ApproximateEntropy
  5   4   8   3   6   6   7   6   4   3  0.816537     52/52      RandomExcursions
  1   5   7   4   7   7   9   5   3   4  0.350485     52/52      RandomExcursions
  9   6   1   7   6   4   3   6   5   5  0.455937     52/52      RandomExcursions
  2   4   9   5   6   2   4   6   6   8  0.383827     52/52      RandomExcursions
  5   3   3  11   5   6   5   2   6   6  0.262249     52/52      RandomExcursions
  5   3   1   9   5   6   7   5   5   6  0.494392     52/52      RandomExcursions
  5   5   3   7   7   1  11   3   5   5  0.137282     51/52      RandomExcursions
  4   4   8   9   3   3   5   3   3  10  0.137282     50/52      RandomExcursions
  4  11   5   1   3   6   6   7   4   5  0.171867     52/52      RandomExcursionsVariant
  4  13   3   2   4   4   4   5   5   8  0.035174     52/52      RandomExcursionsVariant
  8   6   4   5   5   4   7   2   9   2  0.350485     52/52      RandomExcursionsVariant
  8   6   6   8   3   7   2   2   3   7  0.289667     52/52      RandomExcursionsVariant
  9   7   6   5   3   1   6   4   8   3  0.262249     52/52      RandomExcursionsVariant
  8   7   2   5   8   6   4   5   1   6  0.350485     52/52      RandomExcursionsVariant
  7   4   5   7   7   3   4   7   2   6  0.699313     52/52      RandomExcursionsVariant
  6   4   4   6   3   9   8   4   4   4  0.616305     51/52      RandomExcursionsVariant
  6   1   8   5   8   6   2   5   7   4  0.350485     51/52      RandomExcursionsVariant
  7   4   6   8   3   5   4   5   3   7  0.779188     52/52      RandomExcursionsVariant
  9   2   9   4   3   6   3   6   7   3  0.213309     51/52      RandomExcursionsVariant
  9   4   6   2   6   4   4   4   6   7  0.616305     51/52      RandomExcursionsVariant
  5   6   6   6   4   7   0   6   5   7  0.574903     52/52      RandomExcursionsVariant
  5   6   7   0   3   7   6  13   3   2  0.005762     52/52      RandomExcursionsVariant
  4   5   7   5   3  10   5   5   3   5  0.574903     52/52      RandomExcursionsVariant
  6   4   4   7   6   4   9   4   6   2  0.616305     52/52      RandomExcursionsVariant
  5   7   7   4   4   6   5   7   2   5  0.851383     52/52      RandomExcursionsVariant
  5   2   9   7   5   4   4   3   7   6  0.534146     52/52      RandomExcursionsVariant
 14  10  10   7  12   8   8  13   9   9  0.851383     98/100     Serial
 12   8  15  13   6  11  10  11   5   9  0.474986    100/100     Serial
 12  11   9  18   8   9   7  11   9   6  0.334538     94/100  *  LinearComplexity


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
The minimum pass rate for each statistical test with the exception of the
random excursion (variant) test is approximately = 96 for a
sample size = 100 binary sequences.

The minimum pass rate for the random excursion (variant) test
is approximately = 49 for a sample size = 52 binary sequences.

For further guidelines construct a probability table using the MAPLE program
provided in the addendum section of the documentation.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```

### Wyniki dla 2.bit

* ustawienia testu:
    * 100 bitstreams
    * length: 1000_000
* wyniki:
    * Testy zaliczone, poprawa względem pliku 1.bit
  
```
------------------------------------------------------------------------------
RESULTS FOR THE UNIFORMITY OF P-VALUES AND THE PROPORTION OF PASSING SEQUENCES
------------------------------------------------------------------------------
   generator is <data/2.bit>
------------------------------------------------------------------------------
 C1  C2  C3  C4  C5  C6  C7  C8  C9 C10  P-VALUE  PROPORTION  STATISTICAL TEST
------------------------------------------------------------------------------
  6  15  11  10  12   9  10   6  10  11  0.699313     99/100     Frequency
 13   5   6   8   8  14  11  13  10  12  0.455937     99/100     BlockFrequency
  8  17   8   7  15  11   9   3  11  11  0.108791     99/100     CumulativeSums
  5  12   9   7  14  10  10   8  11  14  0.574903     99/100     CumulativeSums
 14  10  12  13   7  13   5   9   7  10  0.514124    100/100     Runs
  8  12  18   7  12  10   8  11   7   7  0.289667    100/100     LongestRun
  5   8  10  13  13   5  11  11  10  14  0.437274     99/100     Rank
  6  17  10  12  12   5   9  12   9   8  0.289667    100/100     FFT
 13  13  10  10   9   9   5   7  14  10  0.637119    100/100     NonOverlappingTemplate
 10  12   9  11  10   7   9  14  12   6  0.816537     98/100     NonOverlappingTemplate
  9  11  13  11  10   3  11   7  16   9  0.289667     98/100     NonOverlappingTemplate
 16   9   7   7   9  12   7  12   5  16  0.145326     99/100     NonOverlappingTemplate
 15  11  12   8  13   8   7   7   7  12  0.554420     98/100     NonOverlappingTemplate
 16  10  11   8  10   8  12  11   5   9  0.574903     99/100     NonOverlappingTemplate
  6  14   8  13  10   7  11  13   9   9  0.678686    100/100     NonOverlappingTemplate
 10  10   6   8  12   9  11  13  11  10  0.935716    100/100     NonOverlappingTemplate
  8   6  12  12   9   8  10  10  19   6  0.162606     99/100     NonOverlappingTemplate
 11  13  10   8   6   7  13  12  11   9  0.798139     99/100     NonOverlappingTemplate
  6   9   8  14  12   7  14  13   8   9  0.534146    100/100     NonOverlappingTemplate
  6  10  16   8  10   8  18   9   7   8  0.129620     98/100     NonOverlappingTemplate
  5   9  14   9   7   4   8   9  19  16  0.012650     98/100     NonOverlappingTemplate
 10  14  11   9   9   5  15   8   6  13  0.366918     99/100     NonOverlappingTemplate
 10  10  15   9   9  13  15   9   5   5  0.262249    100/100     NonOverlappingTemplate
 11   8   9  12   9  11  15   6  10   9  0.798139     99/100     NonOverlappingTemplate
 10   8  10   7  13  10  10  13  10   9  0.955835     99/100     NonOverlappingTemplate
  9   6  12  13  11  11   9  10  13   6  0.759756    100/100     NonOverlappingTemplate
  8   9  15   9  13  11   9   8   5  13  0.534146    100/100     NonOverlappingTemplate
  8   9  13  13  12   5  11  12   9   8  0.719747     99/100     NonOverlappingTemplate
  6   9  11   8   9  14   5  11  18   9  0.162606     99/100     NonOverlappingTemplate
 12  10  13  11   8  11  10   4  12   9  0.739918    100/100     NonOverlappingTemplate
 12  11   8  13   7   7   8  11  14   9  0.759756    100/100     NonOverlappingTemplate
  8  11  14  14  10   7   9  11   8   8  0.779188    100/100     NonOverlappingTemplate
  7  12  12  13  10  11   8  11   8   8  0.911413    100/100     NonOverlappingTemplate
 15  11  10   7   8  10  13   9   9   8  0.798139     97/100     NonOverlappingTemplate
  7   9  15   3   9  12   6  19  13   7  0.015598     99/100     NonOverlappingTemplate
 12   9  12   9  10   6  11  12  11   8  0.935716     97/100     NonOverlappingTemplate
  9  11   6  10  10  12  10  11   8  13  0.935716    100/100     NonOverlappingTemplate
  7  11  12   9   6  13   6  14   9  13  0.514124     99/100     NonOverlappingTemplate
 10  10  10   9  15   5   6  16  10   9  0.319084     99/100     NonOverlappingTemplate
 16   2   8   8  16  10   7  11  11  11  0.075719     98/100     NonOverlappingTemplate
  8   9  15   9  10  12   9   9   7  12  0.834308    100/100     NonOverlappingTemplate
  3   9  14  14  12   9  12   4  12  11  0.153763    100/100     NonOverlappingTemplate
 13  10  12  14  10   4  10  10  12   5  0.401199    100/100     NonOverlappingTemplate
 11   8  16   9   8  10   8  11   7  12  0.699313     99/100     NonOverlappingTemplate
 10   7  12   7  12   7   9  14  11  11  0.798139     99/100     NonOverlappingTemplate
 12   9  10   7   6  13  10  12  10  11  0.883171     99/100     NonOverlappingTemplate
 12   8  12   9   6  10  10   9  10  14  0.867692     99/100     NonOverlappingTemplate
 10  15   6  12  13   6  12   7  13   6  0.289667     99/100     NonOverlappingTemplate
  7  11  10   5  10   5  15  15   8  14  0.162606    100/100     NonOverlappingTemplate
  8  10   7   5  15  10  12  12  12   9  0.574903    100/100     NonOverlappingTemplate
 10  10   6   9  12   6  14   6  15  12  0.366918     99/100     NonOverlappingTemplate
 10   6  12  12   6   7  11  16   7  13  0.319084     98/100     NonOverlappingTemplate
 10  12   5   8  15   6   5  14  13  12  0.171867     98/100     NonOverlappingTemplate
  9  12  10  13   9   9  14   9   9   6  0.834308     99/100     NonOverlappingTemplate
  8   9   9  10  12  11   7  14   9  11  0.924076     98/100     NonOverlappingTemplate
  6   9   8   7   9  10  11  11  13  16  0.554420     99/100     NonOverlappingTemplate
  8   9   7  15  11  15   9   8   6  12  0.437274     98/100     NonOverlappingTemplate
 13   7   6  13   6  12  13  15   8   7  0.275709     97/100     NonOverlappingTemplate
 20   8  11  14   5  10   8   6   9   9  0.051942     96/100     NonOverlappingTemplate
 13  10  10   9  11  12   7   3   6  19  0.048716    100/100     NonOverlappingTemplate
 15  14  12   9   6   7  10   9   6  12  0.419021     97/100     NonOverlappingTemplate
 11  13   6  10  11  13  10  10   8   8  0.883171     99/100     NonOverlappingTemplate
 11   9  13  12  13  11   9   9   4   9  0.699313     99/100     NonOverlappingTemplate
 13   7  10  14  14   9   4   9  10  10  0.455937     98/100     NonOverlappingTemplate
  8   7  10  12   9  18  13   5   5  13  0.090936     99/100     NonOverlappingTemplate
 12  12   5   9  11  13   5   9  16   8  0.275709     99/100     NonOverlappingTemplate
  8  18  14   9   9   5  11  13   6   7  0.102526    100/100     NonOverlappingTemplate
 10  11  17  13   7  14   7   9   6   6  0.181557     98/100     NonOverlappingTemplate
 16   8  11   9   9   5  11  11   7  13  0.455937    100/100     NonOverlappingTemplate
  4  10   7   7  12  15  14  10  10  11  0.350485    100/100     NonOverlappingTemplate
 10  12  10   9   7  10  12   9   9  12  0.983453     96/100     NonOverlappingTemplate
  6  14  15   7   9   9  12   8  10  10  0.574903     99/100     NonOverlappingTemplate
  9  11  10   8  11  11  11   8   9  12  0.994250    100/100     NonOverlappingTemplate
 10  13   6  13  10  10   5  12  10  11  0.699313     98/100     NonOverlappingTemplate
  7   9  11   9   9   8  13  10  13  11  0.935716     99/100     NonOverlappingTemplate
 12  10   7   9  11  11  10  11  10   9  0.994250     99/100     NonOverlappingTemplate
  9  13  12   7   6  16  11   9   8   9  0.514124    100/100     NonOverlappingTemplate
  8  10  16  10   6  11   8  12  10   9  0.678686     98/100     NonOverlappingTemplate
 10  10  12   5  12   3  13  12  11  12  0.350485     99/100     NonOverlappingTemplate
  6  13   7  13  14  10  12   8   7  10  0.574903    100/100     NonOverlappingTemplate
 15  15   9  12  10   7  10   8   9   5  0.401199     97/100     NonOverlappingTemplate
 12  10  12  10  11   9   9   6   9  12  0.955835    100/100     NonOverlappingTemplate
 13  13  10  10   9   9   5   7  14  10  0.637119    100/100     NonOverlappingTemplate
 11  10   9   5  13   8   9   9  17   9  0.419021    100/100     NonOverlappingTemplate
 13   6  12   6  15   7  14  12   9   6  0.236810     96/100     NonOverlappingTemplate
 10  13   8   9  13   8  12   8   9  10  0.935716     99/100     NonOverlappingTemplate
  6   9  18   7   6  11   8   9  16  10  0.096578    100/100     NonOverlappingTemplate
 17  12   5   9  10  15   9   8   8   7  0.202268    100/100     NonOverlappingTemplate
  9  13   8   5   6  12  12   9  16  10  0.350485     99/100     NonOverlappingTemplate
  8   9  12  11   8  10  10  11   8  13  0.971699     99/100     NonOverlappingTemplate
 10   9  10   8   9  15  15   4  10  10  0.419021     99/100     NonOverlappingTemplate
  7  14  10  13  10   9  12  10  11   4  0.574903    100/100     NonOverlappingTemplate
  9   6   9  13  11  12   9   5  13  13  0.574903     99/100     NonOverlappingTemplate
  7   9  10  12  10  13  10  10   9  10  0.983453    100/100     NonOverlappingTemplate
  9  10   7  18   7  10  11   7   7  14  0.224821     99/100     NonOverlappingTemplate
 12   7   7   9  12  13   8  13  13   6  0.595549     99/100     NonOverlappingTemplate
 10  14  11  11  13   7   9  12   5   8  0.637119    100/100     NonOverlappingTemplate
  8  15  11   7  10   9   5  10  14  11  0.514124     98/100     NonOverlappingTemplate
 10  12  12  13   9  15   4  10   9   6  0.383827    100/100     NonOverlappingTemplate
 12  11  13   7   8  10   7  16  10   6  0.455937     99/100     NonOverlappingTemplate
  8  13  12  13   8   6  11  10  11   8  0.816537     98/100     NonOverlappingTemplate
  8   8  10  10   9  13  13  12  12   5  0.739918     98/100     NonOverlappingTemplate
 10   7  10   9   7  11  11   5  18  12  0.249284     99/100     NonOverlappingTemplate
  7  13  14   8  11  15  10  10   6   6  0.383827     98/100     NonOverlappingTemplate
 13   7   5   9   7  10   9  15  17   8  0.153763     97/100     NonOverlappingTemplate
 12  13  10   6  11   9   9  10   7  13  0.834308     98/100     NonOverlappingTemplate
  8  13  10  14   7  11   9  13   8   7  0.719747    100/100     NonOverlappingTemplate
  9  11   5  17  12   6   8   9  10  13  0.275709    100/100     NonOverlappingTemplate
 11  10   5  11  12  13   6  15   7  10  0.437274     99/100     NonOverlappingTemplate
  9   8  11  11   7  11  11   9   6  17  0.494392     99/100     NonOverlappingTemplate
 10  13   8  10   5   8  11  12  15   8  0.574903     98/100     NonOverlappingTemplate
  8   9   7  16   7   8   6   9  16  14  0.153763    100/100     NonOverlappingTemplate
  7  11  10   9   9  10  17  10   9   8  0.678686     99/100     NonOverlappingTemplate
  8   6  14  16  13   7   7   8  10  11  0.319084    100/100     NonOverlappingTemplate
  5  14  10  11  11   9   7   7  11  15  0.455937    100/100     NonOverlappingTemplate
  8  11   9  12  12   6  13  12  10   7  0.816537     97/100     NonOverlappingTemplate
  7   8  12   9  13   9   6  17  13   6  0.224821     99/100     NonOverlappingTemplate
 11   9   8  17   5   8   9  12  10  11  0.437274     98/100     NonOverlappingTemplate
 11  18  11   8   8   7  14   4   8  11  0.122325     99/100     NonOverlappingTemplate
 13  13   8   9   6  12  10  10  10   9  0.883171    100/100     NonOverlappingTemplate
 14  11  14  11   8  14  10   6   5   7  0.319084     99/100     NonOverlappingTemplate
 12  11   9  10   8   6  11   9  12  12  0.935716     99/100     NonOverlappingTemplate
 12  11   8  12   8   8  10   8  11  12  0.964295    100/100     NonOverlappingTemplate
  6   9   6  11  14  13  12  13   8   8  0.534146     97/100     NonOverlappingTemplate
 13   7  10   6   9   9  16  12  11   7  0.474986     98/100     NonOverlappingTemplate
 11   5  10   8  10  12  10  12  14   8  0.759756     98/100     NonOverlappingTemplate
 13  16  10  10   5   9  11   7   8  11  0.474986     97/100     NonOverlappingTemplate
 13  10  14  13   7   5   8  14   6  10  0.319084     97/100     NonOverlappingTemplate
  8   9  17  13  11   9   9   9   6   9  0.494392     99/100     NonOverlappingTemplate
 11  14  12   6  13   5   8   8  13  10  0.455937     98/100     NonOverlappingTemplate
 10   5  10  16  11   7  15   7   8  11  0.275709     99/100     NonOverlappingTemplate
  8  11  10   3   9   9  13  11  11  15  0.419021     99/100     NonOverlappingTemplate
  5  16   9   8  10  13  11   8   9  11  0.514124     99/100     NonOverlappingTemplate
  8   7   7   7   8  11  15  12  10  15  0.437274     99/100     NonOverlappingTemplate
 11  15   9   9  10   9  13   8   4  12  0.514124     97/100     NonOverlappingTemplate
 14   9  10  12  10  12  10   9   6   8  0.867692     98/100     NonOverlappingTemplate
  7  10   9  11  14  13   7  12   9   8  0.798139     99/100     NonOverlappingTemplate
 17   8  10   4  13   5   7  12  14  10  0.085587     99/100     NonOverlappingTemplate
 11   6   8   6  17   7  19   6  10  10  0.023545     98/100     NonOverlappingTemplate
 14   7  15   8   6   6   9  10  15  10  0.262249    100/100     NonOverlappingTemplate
 13  12  11  12  13   7  10   6   7   9  0.719747     98/100     NonOverlappingTemplate
 14   9  10   6  10   5  11  10  13  12  0.616305     99/100     NonOverlappingTemplate
  7  11  11  12   3  13   8  12  15   8  0.275709    100/100     NonOverlappingTemplate
 11  12   8  11  10   5  11   8   6  18  0.213309     98/100     NonOverlappingTemplate
  7   9  11  12   7  13   6  13  15   7  0.419021    100/100     NonOverlappingTemplate
  9  11  10   6  15   7  11   8  13  10  0.678686     99/100     NonOverlappingTemplate
 16   9   9   8   7  10   7   9  10  15  0.474986     98/100     NonOverlappingTemplate
 10  11  10  12  10   9  11  13  10   4  0.816537     97/100     NonOverlappingTemplate
  9   5   9  13  13  14   7   9   6  15  0.262249     99/100     NonOverlappingTemplate
 12   6   9   9  14   8  10   9   8  15  0.616305     99/100     NonOverlappingTemplate
  8   9  11  10   9  16   6   9  15   7  0.401199    100/100     NonOverlappingTemplate
  5  13  16   8  11  15   9  10   5   8  0.162606    100/100     NonOverlappingTemplate
  6   9  15  10   9  10  11  13   9   8  0.759756    100/100     NonOverlappingTemplate
  9   9  12  10  10   7   4  10  15  14  0.419021     99/100     NonOverlappingTemplate
 10  12   5   6  15  10  11  14   7  10  0.383827     99/100     NonOverlappingTemplate
 12  10  12  10  11   9   9   6   9  12  0.955835    100/100     NonOverlappingTemplate
  9  11  12  10  12   9  13   5   9  10  0.867692     98/100     OverlappingTemplate
 11  10   7   9  12  11  11  11   7  11  0.971699     99/100     Universal
 13  17   7   2  15  13   9   6   9   9  0.030806     97/100     ApproximateEntropy
  5   5   4   9   3   3   6   4   7   8  0.534146     54/54      RandomExcursions
  5   2   8   6   0   5   6  10   6   6  0.108791     54/54      RandomExcursions
  7   5   4   5   4   5   9   5   6   4  0.851383     53/54      RandomExcursions
  5   7   8   8   4   7   5   6   3   1  0.383827     53/54      RandomExcursions
  4   8   7   8   5   8   2   3   4   5  0.419021     54/54      RandomExcursions
  8   8   3   5   6   3   5   7   4   5  0.699313     54/54      RandomExcursions
  7   5   6   7   6   6   8   3   4   2  0.657933     53/54      RandomExcursions
  6   3   9   7   4   6   2   4   7   6  0.494392     54/54      RandomExcursions
  5   7   5   8   3   1   8   7   4   6  0.383827     53/54      RandomExcursionsVariant
  5   6   5   5   7   4   2   9   4   7  0.616305     53/54      RandomExcursionsVariant
  7   5   2   9   6   3   2   6   6   8  0.289667     54/54      RandomExcursionsVariant
  5   7   4   6   7   3   9   6   2   5  0.534146     54/54      RandomExcursionsVariant
  6   4   5   9   4   5   4   3   6   8  0.657933     54/54      RandomExcursionsVariant
  4   8   4   3   4  10   3   5   5   8  0.289667     54/54      RandomExcursionsVariant
  6   3   4   6   6   9   6   5   3   6  0.739918     54/54      RandomExcursionsVariant
  6   8   3   8   1   5   5   9   7   2  0.137282     54/54      RandomExcursionsVariant
  7   6   4   1   7   4   7   7   4   7  0.534146     54/54      RandomExcursionsVariant
  8   7   6   7   3   5   4   4   5   5  0.851383     53/54      RandomExcursionsVariant
  7   9   4   3   7   5   8   3   2   6  0.319084     53/54      RandomExcursionsVariant
  6  10   5   8   1   5   8   3   5   3  0.137282     54/54      RandomExcursionsVariant
  7   7   4   4   4   7   8   4   5   4  0.816537     54/54      RandomExcursionsVariant
  7   6   2   3   4   5   6  11   5   5  0.262249     54/54      RandomExcursionsVariant
  4   7   3   3   6   4  10   3   9   5  0.213309     53/54      RandomExcursionsVariant
  6   4   2   5   8   4   6   5   6   8  0.699313     53/54      RandomExcursionsVariant
  6   3   5   5   7   7   4   4   5   8  0.851383     53/54      RandomExcursionsVariant
  6   2   4   8   5   8   4   4   7   6  0.616305     53/54      RandomExcursionsVariant
 12  12   6   8   6  14  15   9  11   7  0.383827     97/100     Serial
  6  13   8  12  13   6  13  10   9  10  0.657933     99/100     Serial
 13  11  12  10   8  14   6   4  11  11  0.455937    100/100     LinearComplexity


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
The minimum pass rate for each statistical test with the exception of the
random excursion (variant) test is approximately = 96 for a
sample size = 100 binary sequences.

The minimum pass rate for the random excursion (variant) test
is approximately = 51 for a sample size = 54 binary sequences.

For further guidelines construct a probability table using the MAPLE program
provided in the addendum section of the documentation.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

```

### Wyniki dla 3.bit

* ustawienia testu:
    * 100 bitstreams
    * length: 1000_000
* wyniki:
    * Testy częściowo nie zaliczone

```
------------------------------------------------------------------------------
RESULTS FOR THE UNIFORMITY OF P-VALUES AND THE PROPORTION OF PASSING SEQUENCES
------------------------------------------------------------------------------
   generator is <data/3.bit>
------------------------------------------------------------------------------
 C1  C2  C3  C4  C5  C6  C7  C8  C9 C10  P-VALUE  PROPORTION  STATISTICAL TEST
------------------------------------------------------------------------------
  7  13  10  12   6  15   7   7  15   8  0.275709     99/100     Frequency
 14   6   4  13   8  11  11   9  10  14  0.350485    100/100     BlockFrequency
  9  13  10  14   7   6  14   6   8  13  0.383827     99/100     CumulativeSums
  8  12   9   6  14   5   7  13  13  13  0.334538     98/100     CumulativeSums
 14  15  10   8  11   7  12  10   5   8  0.455937    100/100     Runs
  8   9  17   9   9  18   9   7   7   7  0.096578    100/100     LongestRun
  9  13   9  15   5  11  11   7   7  13  0.437274     99/100     Rank
  6  13  11   8  11  13   8   9  12   9  0.834308    100/100     FFT
 16   6  10  10  11  10   5  10  11  11  0.534146     99/100     NonOverlappingTemplate
 10   9  13  12   9   8   9  10  11   9  0.987896     98/100     NonOverlappingTemplate
 10  12  12  11   7  11   5   9  13  10  0.798139     98/100     NonOverlappingTemplate
 15  12   6   8   8  11   8  11   8  13  0.616305     99/100     NonOverlappingTemplate
  9  17  13   6  17   5  10   7   5  11  0.030806     98/100     NonOverlappingTemplate
 13  14   8   9   8  10   9  12  11   6  0.779188     99/100     NonOverlappingTemplate
  8   9  10  13   9   6  14  12  10   9  0.816537    100/100     NonOverlappingTemplate
 11   7   7  10  10  14  12   8   8  13  0.779188    100/100     NonOverlappingTemplate
  4  11  10  14   7  14   7  13  10  10  0.383827     99/100     NonOverlappingTemplate
  8  13  12   9   7   9  10  12  14   6  0.699313     98/100     NonOverlappingTemplate
  5  11  14  10   7  10  12  12  14   5  0.350485    100/100     NonOverlappingTemplate
  7   5  20   6  11  13  17  10   4   7  0.002559     98/100     NonOverlappingTemplate
  6   8  11   8   7   7   2  14  22  15  0.000600     98/100     NonOverlappingTemplate
 12  12  11   7   9  13   6   6  13  11  0.637119     98/100     NonOverlappingTemplate
  9   9  15  15   9   9   3  17   6   8  0.045675    100/100     NonOverlappingTemplate
 12  12   6   6  13  10  10  13  11   7  0.657933     98/100     NonOverlappingTemplate
 10   8  12   8  11  15   6  13   8   9  0.657933     99/100     NonOverlappingTemplate
  8  16   5   8  15   7  12  16   6   7  0.051942    100/100     NonOverlappingTemplate
  6  11  15  10  10   9  12   7   9  11  0.759756    100/100     NonOverlappingTemplate
  8  12  12  10  12   6   9  20   6   5  0.042808     98/100     NonOverlappingTemplate
  5   8   7  14   7  16   5  15  13  10  0.071177     99/100     NonOverlappingTemplate
 10   9  13  14  13   7   7  12   6   9  0.595549    100/100     NonOverlappingTemplate
 12   9  14  11   7   7  10  12  11   7  0.798139    100/100     NonOverlappingTemplate
  9   9  13  10  18   8   7   8  11   7  0.334538    100/100     NonOverlappingTemplate
  7  12  12  15   6  12   8  12  10   6  0.474986     99/100     NonOverlappingTemplate
 13  15  11   5   6  10   9  13  10   8  0.437274     98/100     NonOverlappingTemplate
  7   9  12   8   7   9   9  14  13  12  0.759756     99/100     NonOverlappingTemplate
 11   9  12  10   9  10   7   9  13  10  0.978072     97/100     NonOverlappingTemplate
 12   6   9  14   8  10   7  11  10  13  0.739918    100/100     NonOverlappingTemplate
 10  11   9   6  14   3  10  10  18   9  0.096578     99/100     NonOverlappingTemplate
  9  13   6  12   8  10  14   7  12   9  0.699313     99/100     NonOverlappingTemplate
 14   5   8  10  10  10   7  14  10  12  0.595549     96/100     NonOverlappingTemplate
  8   8  14   6  12  13   9  10   8  12  0.719747    100/100     NonOverlappingTemplate
  3   9  14  11  17   9  12   7   8  10  0.145326    100/100     NonOverlappingTemplate
 16   6  12  13  13   4   9   9  10   8  0.236810     99/100     NonOverlappingTemplate
 13   9  13  11   9   9   8   9   9  10  0.971699     98/100     NonOverlappingTemplate
  9   6  11  15   8  12   4  12   7  16  0.137282    100/100     NonOverlappingTemplate
 13   4  17   8   8   9   9  11  11  10  0.304126     98/100     NonOverlappingTemplate
 10  10   7   8  11  13   5  12   9  15  0.554420     99/100     NonOverlappingTemplate
 15   8   8  16   5  12   7   9   8  12  0.236810     98/100     NonOverlappingTemplate
  6  11   7  11  10  10   7  17  11  10  0.474986    100/100     NonOverlappingTemplate
  8  13   3   9  11  14  11  11  13   7  0.350485     99/100     NonOverlappingTemplate
  8   9  14  10   8   7  12  11   9  12  0.883171     99/100     NonOverlappingTemplate
  8  13   9  14   4   9  11  13   7  12  0.437274     98/100     NonOverlappingTemplate
 12   7   9   8  10   8  11   9  16  10  0.739918     97/100     NonOverlappingTemplate
 13   6  13   6  14  10   8  11  13   6  0.383827     99/100     NonOverlappingTemplate
 10   6  12  10   8  14   8  11   9  12  0.834308     98/100     NonOverlappingTemplate
  8   8   8   7   8  12   9  12  15  13  0.657933     99/100     NonOverlappingTemplate
  9   3  14   9  17  10   8   8   9  13  0.145326     97/100     NonOverlappingTemplate
 13   8   7   5  12  10  15  13   6  11  0.334538     97/100     NonOverlappingTemplate
 18  12   8  11   8  11   8   5  12   7  0.213309     98/100     NonOverlappingTemplate
 11   8  14   7  12  11   6   7  10  14  0.574903     98/100     NonOverlappingTemplate
 17   9   9  12   8   9   4  10  12  10  0.350485     97/100     NonOverlappingTemplate
 11   8  16   7   7  14   9  10  10   8  0.534146     99/100     NonOverlappingTemplate
 10  11  12  15  10  12   8   7   5  10  0.616305     99/100     NonOverlappingTemplate
 13   9  12  13  13   7   6   7   7  13  0.494392    100/100     NonOverlappingTemplate
  7   8  11   8  15  12   9  11   7  12  0.719747     99/100     NonOverlappingTemplate
 10  11  10  11  10   8   9   9  12  10  0.998821     99/100     NonOverlappingTemplate
 13  11  13  11  13   8   7  10   9   5  0.657933    100/100     NonOverlappingTemplate
 13  14  12   8   9  11   9  14   6   4  0.319084     98/100     NonOverlappingTemplate
 15   8   8  11   9   9   6   8  14  12  0.574903    100/100     NonOverlappingTemplate
  3   8   9   9  14  13  12   9  13  10  0.401199     99/100     NonOverlappingTemplate
 10  15   8   8   9   8  12   9  10  11  0.883171     96/100     NonOverlappingTemplate
  8  10  17   9   9   6   6   9  18   8  0.075719     99/100     NonOverlappingTemplate
  9   8  10   9  12  12  13  11   6  10  0.911413    100/100     NonOverlappingTemplate
 11  11  10  10   6  10  14  10   3  15  0.289667     99/100     NonOverlappingTemplate
  9   4  11  11   9  13  13   8  11  11  0.699313     99/100     NonOverlappingTemplate
 13   6  10   8  10  10  14   8  12   9  0.798139     99/100     NonOverlappingTemplate
  9  11   8  11   9  15  11  11   6   9  0.816537     99/100     NonOverlappingTemplate
  6  14  15  10   8   9   9  14   6   9  0.383827    100/100     NonOverlappingTemplate
 10  12   7   9   5  14  10  12  14   7  0.494392     99/100     NonOverlappingTemplate
  7  16   7  13  17   8   8   5   8  11  0.090936    100/100     NonOverlappingTemplate
 12  15  12   9  10  10  10   7   9   6  0.739918     98/100     NonOverlappingTemplate
 10  11  13   9   7  10   9   8  11  12  0.964295     99/100     NonOverlappingTemplate
 16   7   9  10  11  10   4  11  11  11  0.474986     99/100     NonOverlappingTemplate
 11   7   9   9   8  11   6   8  19  12  0.202268     98/100     NonOverlappingTemplate
 11   9  12   9   8  15  14   4   8  10  0.419021     95/100  *  NonOverlappingTemplate
 12  11  11   7   7   8  13  11   6  14  0.637119     99/100     NonOverlappingTemplate
  5   9  14  12   6   8  13  10  11  12  0.534146     98/100     NonOverlappingTemplate
 15  11  12   2  15   8  13   8   9   7  0.102526     99/100     NonOverlappingTemplate
  8  12   9   5   8  13   9  17  10   9  0.366918    100/100     NonOverlappingTemplate
  7   8  18   9   6  11   3  11  14  13  0.048716     99/100     NonOverlappingTemplate
  8   9   9  11  10  13  12   8   9  11  0.978072     99/100     NonOverlappingTemplate
  6  12   8  12  19   7   9   8  13   6  0.096578    100/100     NonOverlappingTemplate
  7   7  11  10  11  11  11   9  11  12  0.971699    100/100     NonOverlappingTemplate
  8   8   8  14  14  11   9  10   8  10  0.834308     99/100     NonOverlappingTemplate
  9   9  12  13   9  10   8   9   9  12  0.978072     99/100     NonOverlappingTemplate
 10   9   9   9  10  11   8  12  14   8  0.955835     99/100     NonOverlappingTemplate
 12  15  14   5  10  13   9   9   6   7  0.304126    100/100     NonOverlappingTemplate
  9  12   8  13  10   9   9   5  16   9  0.514124     98/100     NonOverlappingTemplate
  9  11  15   9  12  10  10   8   8   8  0.883171    100/100     NonOverlappingTemplate
 12  11  13   6  11   8  13   6  14   6  0.419021     98/100     NonOverlappingTemplate
  7  14   9  11   9  12   9   9  14   6  0.678686    100/100     NonOverlappingTemplate
  8   8   8  15  14  14  10   3  13   7  0.137282     98/100     NonOverlappingTemplate
  9   6  11   8   7   8  12  13  14  12  0.657933     99/100     NonOverlappingTemplate
  9  12   9  11  13  12   8  11   9   6  0.897763     99/100     NonOverlappingTemplate
 12   5   8   8  12   5   9  17  10  14  0.153763     97/100     NonOverlappingTemplate
 11  11  10   9   5  14  15   5   9  11  0.383827     98/100     NonOverlappingTemplate
  9  10  11  14  10   9   8  12  12   5  0.779188    100/100     NonOverlappingTemplate
  9   8  11  14   7   9  13  12   8   9  0.834308     99/100     NonOverlappingTemplate
 15   6   9   8  11   9   9  17  10   6  0.249284     99/100     NonOverlappingTemplate
  9   8   7  16  11   9   8  11   8  13  0.637119     99/100     NonOverlappingTemplate
 14   3  14  10   6  11  11   9  12  10  0.319084     98/100     NonOverlappingTemplate
  8  12   9  10  10   6  12   3  16  14  0.162606    100/100     NonOverlappingTemplate
  4  12  11  11  13  12  12   7   9   9  0.637119     99/100     NonOverlappingTemplate
  7  10  11  19   5  12   9   9   6  12  0.115387    100/100     NonOverlappingTemplate
  5  12  12  12   9   9   8   8   8  17  0.350485    100/100     NonOverlappingTemplate
  7   8  11  11  15   8  12   9   8  11  0.798139     97/100     NonOverlappingTemplate
  7   6   9  17   6   8  14  14  12   7  0.122325     99/100     NonOverlappingTemplate
 10  11  10   6  13   9   7   8  13  13  0.759756     98/100     NonOverlappingTemplate
 10  18  14   5   7   8   6  13  10   9  0.108791     99/100     NonOverlappingTemplate
 10  15   9   9   6  11   8  14   8  10  0.657933     99/100     NonOverlappingTemplate
 17   8  13  15  11   4   6   9  11   6  0.071177     98/100     NonOverlappingTemplate
 10  11  12   7  11  12   6  10   9  12  0.911413     99/100     NonOverlappingTemplate
 12  11  10   5  15   5  10  12   7  13  0.334538    100/100     NonOverlappingTemplate
  5   6  17   6  10  15  13   7  13   8  0.062821     97/100     NonOverlappingTemplate
 10  13   7   9   4  16   9   7  12  13  0.249284     99/100     NonOverlappingTemplate
 11   5  11   6  11  12  11  10  15   8  0.554420    100/100     NonOverlappingTemplate
 10  19  11   9   5  11   9   5  12   9  0.122325     97/100     NonOverlappingTemplate
 15  10  13   9   9   8   7   7   9  13  0.657933     94/100  *  NonOverlappingTemplate
  6  11  15  14  11  10   9  11   8   5  0.437274     99/100     NonOverlappingTemplate
 11  11  14   8  11   6   9  13   7  10  0.759756     99/100     NonOverlappingTemplate
  6  12   9   8  14  16   7   9   9  10  0.455937     99/100     NonOverlappingTemplate
 10   3  14   8   9   7  15   8  12  14  0.171867    100/100     NonOverlappingTemplate
  9   9  12  11   6  14  12   6   9  12  0.699313    100/100     NonOverlappingTemplate
  9   8   4   6  14   9  10  11  12  17  0.171867     99/100     NonOverlappingTemplate
 11  13  10   8   8  15   8   8   9  10  0.816537     98/100     NonOverlappingTemplate
 13   8  11  13  14   9  10   8   5   9  0.637119     98/100     NonOverlappingTemplate
  7  10   9  11  13  13  10   9  12   6  0.834308     99/100     NonOverlappingTemplate
 16  12   9   6   6  12   9   6  12  12  0.334538    100/100     NonOverlappingTemplate
 11   5  11  11  10  13  12   9   7  11  0.816537     98/100     NonOverlappingTemplate
 12  10   7  11   9   5  10  14  12  10  0.739918     99/100     NonOverlappingTemplate
 12  14   9   9  10  11  10   6  11   8  0.883171     98/100     NonOverlappingTemplate
 11  11   8   9  10   6   8  16   8  13  0.574903     99/100     NonOverlappingTemplate
  8  11  11   7   5  13  11  13  11  10  0.739918    100/100     NonOverlappingTemplate
 11  10  12   9  10  11   6   8  10  13  0.935716     97/100     NonOverlappingTemplate
  8   9  10  15   7   7   9  14  13   8  0.554420    100/100     NonOverlappingTemplate
  7  11  14   9   9   8   7   9  18   8  0.275709     99/100     NonOverlappingTemplate
 15  12  10   6   5  10  12   8   9  13  0.455937     99/100     NonOverlappingTemplate
 12   8  15   9  12   7  12  10  10   5  0.574903     99/100     NonOverlappingTemplate
  6  11   8  13  11   8  14   6  11  12  0.616305     98/100     NonOverlappingTemplate
 12   6   7  12   8  15   7  10   9  14  0.455937     99/100     NonOverlappingTemplate
  6  13   7  18  12   5  10   9  12   8  0.137282    100/100     NonOverlappingTemplate
  7  12   9  15  13   7  11  11   6   9  0.574903    100/100     NonOverlappingTemplate
  5  14   7  14  12  13   7   5  13  10  0.202268    100/100     NonOverlappingTemplate
  9  10  13  14   5   3   9  16   5  16  0.019188     99/100     NonOverlappingTemplate
 12   9   5   9  12  11  15   9  12   6  0.514124    100/100     NonOverlappingTemplate
 10  11  13   9   7  10   9   8  11  12  0.964295     99/100     NonOverlappingTemplate
 12   5  11  17  12   8   8   7   9  11  0.334538     98/100     OverlappingTemplate
 11   5  11  11  13   6  14  10  11   8  0.595549     99/100     Universal
 16   6  10   8  11  13  13   9   6   8  0.383827    100/100     ApproximateEntropy
  5   5   6   4   7   5   2   6  12   5  0.162606     57/57      RandomExcursions
  4   7   6   6   6   8   9   4   6   1  0.334538     57/57      RandomExcursions
  5   3   8   6   6   5   3   4   5  12  0.129620     57/57      RandomExcursions
  5  10   6   7   3   4   5   5   5   7  0.554420     57/57      RandomExcursions
 11   5   4   6   4   6   9   2   7   3  0.102526     55/57      RandomExcursions
  8   6   7   3   6   3   7   8   5   4  0.595549     57/57      RandomExcursions
  8   5   4   5   8   3   7   8   6   3  0.514124     57/57      RandomExcursions
  6  11   7   3   2   3   3   8   6   8  0.062821     57/57      RandomExcursions
  9   4   7   7   6   9   5   3   5   2  0.275709     57/57      RandomExcursionsVariant
  8   8   5   3   7   5   9   3   3   6  0.334538     57/57      RandomExcursionsVariant
  6   8   5   6   3   6   6   4   9   4  0.637119     57/57      RandomExcursionsVariant
  6   4  10   6   5   3   3   9   7   4  0.249284     57/57      RandomExcursionsVariant
  7   4   7   4   7   7   6   5   4   6  0.897763     57/57      RandomExcursionsVariant
  7   3   9   7   5   7   3   2   6   8  0.275709     57/57      RandomExcursionsVariant
  8   6   7   5   2   2   7   8   6   6  0.401199     57/57      RandomExcursionsVariant
  8   6   4   8   6   5   7   7   3   3  0.595549     56/57      RandomExcursionsVariant
 10   8   6   5   4   6   9   4   4   1  0.115387     56/57      RandomExcursionsVariant
  8   5  11   6   6   6   2   3   4   6  0.181557     55/57      RandomExcursionsVariant
  9   6   4  10   4   3   5   4   7   5  0.304126     57/57      RandomExcursionsVariant
  9   8  10   4   4   6   5   3   4   4  0.224821     56/57      RandomExcursionsVariant
 11   7   8   3   5   5   4   6   4   4  0.249284     57/57      RandomExcursionsVariant
 10   7   5   3   4   8   6   3   5   6  0.366918     56/57      RandomExcursionsVariant
  9   7   6   3   4   3   8   6   5   6  0.514124     55/57      RandomExcursionsVariant
  7   4   7   7   7   1   7   7   6   4  0.474986     55/57      RandomExcursionsVariant
  6   5   4   5   9   8   5   5   3   7  0.637119     56/57      RandomExcursionsVariant
  5   6   6   2   6   7   9   5   7   4  0.595549     56/57      RandomExcursionsVariant
 13  10   7   8  11   8  11  13   9  10  0.924076     98/100     Serial
  9   7  11  16  10   8   7  11  10  11  0.719747    100/100     Serial
  6   8   7  15   8  15  13  13  10   5  0.181557     98/100     LinearComplexity


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
The minimum pass rate for each statistical test with the exception of the
random excursion (variant) test is approximately = 96 for a
sample size = 100 binary sequences.

The minimum pass rate for the random excursion (variant) test
is approximately = 54 for a sample size = 57 binary sequences.

For further guidelines construct a probability table using the MAPLE program
provided in the addendum section of the documentation.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```

### Wyniki dla 4.bit

Plik o takiej samej długości jak TRNG_P, ale zawiera ukryty blok o długości 800 bitów.

* ustawienia testu:
    * 100 bitstreams
    * length: 1000_000
* wyniki:
    * Testy zaliczone, poprawa względem pliku 1.bit


```
------------------------------------------------------------------------------
RESULTS FOR THE UNIFORMITY OF P-VALUES AND THE PROPORTION OF PASSING SEQUENCES
------------------------------------------------------------------------------
   generator is <data/4.bit>
------------------------------------------------------------------------------
 C1  C2  C3  C4  C5  C6  C7  C8  C9 C10  P-VALUE  PROPORTION  STATISTICAL TEST
------------------------------------------------------------------------------
  9   9  14  11   5   8  10  14   5  15  0.249284     99/100     Frequency
  9  11   6  10   7  12  10  10  11  14  0.851383     99/100     BlockFrequency
 10  10  14   8  10   6   8  14   7  13  0.595549     99/100     CumulativeSums
  9   7  13   8   9   7   9  12  11  15  0.699313     99/100     CumulativeSums
 11  15  14  12   7   9   8   7   9   8  0.595549    100/100     Runs
  7  14   6  13  12  13  10   8   9   8  0.616305    100/100     LongestRun
 16   5  12  14  10  10   9  12   4   8  0.181557    100/100     Rank
  9   9   8  13  10  11   8   9   8  15  0.834308    100/100     FFT
 13  10   8  12   8   7   8   9  14  11  0.816537    100/100     NonOverlappingTemplate
  8  12  10  16   3  13   7  13  13   5  0.080519     99/100     NonOverlappingTemplate
 11   9  14  12   7   6   6  12  14   9  0.494392    100/100     NonOverlappingTemplate
 10  13  12   5  10  10  13   6  12   9  0.657933     99/100     NonOverlappingTemplate
 10  13  12   8  11  14  12   8   5   7  0.574903    100/100     NonOverlappingTemplate
 11   8  17  10  10   6   8   9  15   6  0.236810     99/100     NonOverlappingTemplate
  6  18   3  13   6  12  13   4  12  13  0.010237    100/100     NonOverlappingTemplate
 11   6   6  13   8  13  12   6  11  14  0.419021    100/100     NonOverlappingTemplate
  5   7  11  13  10  11  10  12  10  11  0.834308     99/100     NonOverlappingTemplate
 11   8   8  16   8  13   9   9   7  11  0.637119     99/100     NonOverlappingTemplate
  4   9  20   7  13   9   8  12  11   7  0.042808    100/100     NonOverlappingTemplate
  7   8  13  10  11  16  13   8   6   8  0.419021     98/100     NonOverlappingTemplate
  6   8   9   9   6   5  11  15  12  19  0.042808     99/100     NonOverlappingTemplate
 10  12  14   7  10   9   7   9   9  13  0.834308     98/100     NonOverlappingTemplate
 11  10   8  14   6  11   9  10  13   8  0.816537     99/100     NonOverlappingTemplate
 14  11   7   5  10   6  19  12   6  10  0.051942     99/100     NonOverlappingTemplate
 10   9   9  13  14   9  13   7   7   9  0.779188     99/100     NonOverlappingTemplate
  9  11  11   7  10  14   9  14   5  10  0.637119    100/100     NonOverlappingTemplate
  7  14   9  15   8   8  12   7  10  10  0.616305    100/100     NonOverlappingTemplate
 13   7  14  10  12   6  10  14   7   7  0.455937     98/100     NonOverlappingTemplate
  5   8  13  10  10   6  13  13  10  12  0.574903     99/100     NonOverlappingTemplate
  7  10  13   9  10  10  16   7   9   9  0.678686     99/100     NonOverlappingTemplate
 11  11  11  12   4  10  14  13   7   7  0.474986     99/100     NonOverlappingTemplate
  8  12  11  12  14   9   8   6  15   5  0.350485    100/100     NonOverlappingTemplate
  8  13  12  12   8  11   6  11   9  10  0.883171    100/100     NonOverlappingTemplate
 11  10  13  10  11   3  10  12  15   5  0.249284     98/100     NonOverlappingTemplate
  3   9  12   7   7   6  12  18  13  13  0.042808     99/100     NonOverlappingTemplate
 12  10  11   9  10   9   7   8  13  11  0.964295     97/100     NonOverlappingTemplate
  9   9   5   7  20   7  14   6  11  12  0.032923     99/100     NonOverlappingTemplate
  7  14   5   9  12   7   8  12  15  11  0.366918     99/100     NonOverlappingTemplate
 10   8  11   9  13   9   7  12   9  12  0.946308    100/100     NonOverlappingTemplate
 14   8   3   9  11  12  13  14   7   9  0.275709     96/100     NonOverlappingTemplate
 10  12   7  11  11   4  14  10   6  15  0.289667    100/100     NonOverlappingTemplate
  4  14   8  15   7  12  13  11   6  10  0.213309    100/100     NonOverlappingTemplate
 19  10   8   9   5  13  10   6  12   8  0.108791    100/100     NonOverlappingTemplate
 14  14  14   4   9   8  10  10   8   9  0.401199     98/100     NonOverlappingTemplate
  7   8  13  13  10   7   7  12   7  16  0.366918     99/100     NonOverlappingTemplate
 13   6  14   5  12   7  13   9  12   9  0.401199     99/100     NonOverlappingTemplate
  9   8  11  11   7  10  10  12  11  11  0.987896    100/100     NonOverlappingTemplate
 14  12   9   8  10   6  10  12   9  10  0.867692     98/100     NonOverlappingTemplate
  6  13  15   6   4  11   9  11  15  10  0.162606    100/100     NonOverlappingTemplate
 10  10   9   7  10  12  12  11   7  12  0.955835     99/100     NonOverlappingTemplate
  8  10  13   7  10  13  11   9  10   9  0.946308    100/100     NonOverlappingTemplate
  8  13   9  10  12   9   7   9   9  14  0.867692     98/100     NonOverlappingTemplate
 12  10   9   5  11   7   6  19  13   8  0.090936     99/100     NonOverlappingTemplate
  9  13   8   7  15   6  12  12   7  11  0.514124     99/100     NonOverlappingTemplate
  6  10  11  12  10  12  12   7   9  11  0.911413     98/100     NonOverlappingTemplate
  7  12   5   5  10  15  10  11  11  14  0.304126     99/100     NonOverlappingTemplate
  7   7  10  11  13  12   8  11  11  10  0.924076     97/100     NonOverlappingTemplate
 12  11   3  11  11   9   8  12  13  10  0.595549     97/100     NonOverlappingTemplate
 18   8  16   1  10  11   8  11  10   7  0.017912     98/100     NonOverlappingTemplate
 10  11  12   9  10   8   8  10   7  15  0.851383     99/100     NonOverlappingTemplate
 15  12   9  11  11   7   6  10   6  13  0.514124     98/100     NonOverlappingTemplate
 10  11  10   8   9   5  18  12  10   7  0.289667     99/100     NonOverlappingTemplate
  8  13  11  17   8   9  12   8   5   9  0.334538     99/100     NonOverlappingTemplate
 13  11  11  13  11   8   8   5   8  12  0.719747    100/100     NonOverlappingTemplate
  7   8  11  11   9  12  11  13   9   9  0.955835     99/100     NonOverlappingTemplate
 12   4   9  12  12  16   5   7  13  10  0.171867     99/100     NonOverlappingTemplate
 10  16   9  12  10   9  12   4  10   8  0.474986    100/100     NonOverlappingTemplate
 18  10  10   9   7  13  11   5   9   8  0.249284     97/100     NonOverlappingTemplate
 15  11   3  11  12   9   4  11  13  11  0.171867    100/100     NonOverlappingTemplate
  4   5  12  13  11   8  13  13  10  11  0.366918     99/100     NonOverlappingTemplate
 11  12  12   8  10  10   7  15   5  10  0.616305     98/100     NonOverlappingTemplate
  9  11   7  14  12   6  11   9  11  10  0.834308     99/100     NonOverlappingTemplate
 10   9  10   8  10  13   9   8  14   9  0.935716    100/100     NonOverlappingTemplate
  7  16   9  13   4  10  12   6  11  12  0.236810     98/100     NonOverlappingTemplate
 10   4   9  13  12   9  13  11   8  11  0.678686     99/100     NonOverlappingTemplate
 12   6  10  11   5  12  14  10   8  12  0.595549    100/100     NonOverlappingTemplate
 13   8   8  10   8  16  13  10   5   9  0.419021     98/100     NonOverlappingTemplate
  9  12  10  14  10   8   9  12  10   6  0.867692     98/100     NonOverlappingTemplate
  9   7   8  16   4  14   6  11  17   8  0.045675     99/100     NonOverlappingTemplate
  8  13   8  12  14   8  11   7   7  12  0.699313    100/100     NonOverlappingTemplate
 16  12  14   7   7  14   6   9   8   7  0.213309     98/100     NonOverlappingTemplate
  9  14  14   2  11  10   8   9   9  14  0.213309     99/100     NonOverlappingTemplate
 13  10   8  12   8   7   8   9  14  11  0.816537    100/100     NonOverlappingTemplate
  9  15   4   5  12   8  10   9  13  15  0.162606    100/100     NonOverlappingTemplate
 16   8   8  10  10  17   6   9   5  11  0.137282     97/100     NonOverlappingTemplate
 12  13   4  10  11  10   8  11  10  11  0.779188     99/100     NonOverlappingTemplate
  7   8  11  12   6  11  10  12  11  12  0.883171    100/100     NonOverlappingTemplate
 16  14   8   6   8   8  11  10  11   8  0.474986    100/100     NonOverlappingTemplate
 11   5  14   5  10  13  13  12   9   8  0.401199     99/100     NonOverlappingTemplate
  7  11  11  11  11   4  12   5  19   9  0.066882     98/100     NonOverlappingTemplate
 13   6  12   7  15   5   8  12  11  11  0.366918    100/100     NonOverlappingTemplate
 11  12  10   9   5  12  20   6   7   8  0.058984     99/100     NonOverlappingTemplate
  4  10  10   7  17  13  12   9   7  11  0.224821    100/100     NonOverlappingTemplate
 12   5   9  11  11  11  12  11   8  10  0.897763     99/100     NonOverlappingTemplate
 10   5  12  12  10  12  13   8   4  14  0.334538     99/100     NonOverlappingTemplate
 10   5  10  14  12   9   9  10  14   7  0.616305     99/100     NonOverlappingTemplate
  8  17   8  12  14  12   8   7   9   5  0.213309    100/100     NonOverlappingTemplate
  9  10  13  13  12   7   6   7   6  17  0.202268     99/100     NonOverlappingTemplate
  9  11  15   9  10  15   8   5   7  11  0.419021    100/100     NonOverlappingTemplate
 13   7  11  10  11   7   8  10  14   9  0.834308     99/100     NonOverlappingTemplate
  8   7  14  12   9   7  10  16  11   6  0.383827     99/100     NonOverlappingTemplate
  9  11   7  10  10  19  10   8   8   8  0.319084     97/100     NonOverlappingTemplate
 11   5   7   7  13   5  10  12  17  13  0.122325     98/100     NonOverlappingTemplate
  9  12  11  16   9  12  12   4   9   6  0.319084     99/100     NonOverlappingTemplate
 10  10   5   6   8  11  16   9  14  11  0.350485     97/100     NonOverlappingTemplate
 10   9  13  10  10   8   8  12  10  10  0.987896     97/100     NonOverlappingTemplate
  8  12  11   8  10  12  10  11  10   8  0.987896    100/100     NonOverlappingTemplate
 11  10   8   9  10   6  15  12  10   9  0.816537    100/100     NonOverlappingTemplate
 14   8   4  10  12  12  11  14  10   5  0.304126     98/100     NonOverlappingTemplate
 10  10  10   7  11   9   8  12  10  13  0.971699     99/100     NonOverlappingTemplate
 12   7   7  10  10  10   9  16   8  11  0.699313     98/100     NonOverlappingTemplate
  9  11  10  13   8   5   6  11  16  11  0.401199    100/100     NonOverlappingTemplate
  7   9  12   9  11   7  13  13   8  11  0.851383    100/100     NonOverlappingTemplate
  8  14   7  12  14   9   9   9   9   9  0.798139    100/100     NonOverlappingTemplate
  5  10  15  12   8   9   6  11   9  15  0.334538    100/100     NonOverlappingTemplate
  7   9   6  17  10   8  12  12  11   8  0.419021     97/100     NonOverlappingTemplate
  8   7   7  12   9   9  16  10  16   6  0.236810     99/100     NonOverlappingTemplate
 12   8  10   9  10  11   6  11  10  13  0.935716     98/100     NonOverlappingTemplate
 11  11  14   7   8   8   9  16  11   5  0.366918     99/100     NonOverlappingTemplate
 13  14   7   7  10  11   6   9  13  10  0.637119     98/100     NonOverlappingTemplate
 13  11  18  11   9   7   8   6   8   9  0.275709     99/100     NonOverlappingTemplate
 11  10  10   8   9   8  10  11   8  15  0.911413     99/100     NonOverlappingTemplate
  9  15   8   5   6  15  14   8  11   9  0.224821     99/100     NonOverlappingTemplate
  6   6  11  14   9  10  12  10  12  10  0.759756     97/100     NonOverlappingTemplate
 16  11   9   7   4  12   7  11  11  12  0.334538     99/100     NonOverlappingTemplate
 10   7   9  11  11  15   5   9  12  11  0.657933     98/100     NonOverlappingTemplate
 13  13   6  14  10   7  10  10   8   9  0.699313     97/100     NonOverlappingTemplate
 16  11   9  10   9   4  10  11  10  10  0.574903     97/100     NonOverlappingTemplate
  7  10  16  11   8  12  13  10   5   8  0.419021     99/100     NonOverlappingTemplate
 13  10  14  10   4  12   8   8   9  12  0.554420     99/100     NonOverlappingTemplate
  7   8  12  10  18   9  11   3   9  13  0.115387    100/100     NonOverlappingTemplate
 10   7  11   9  11   7   9  10  17   9  0.616305    100/100     NonOverlappingTemplate
  6  14   5  13  12   9  10  12   6  13  0.350485    100/100     NonOverlappingTemplate
 10   8   6   4  14   7  14   7  12  18  0.042808     99/100     NonOverlappingTemplate
 14   9   9   9  15  11   7  12   5   9  0.494392     98/100     NonOverlappingTemplate
 11  15  14  10   9  11   7   7   7   9  0.616305     99/100     NonOverlappingTemplate
  7   9  12  11  13  12   7  12   7  10  0.834308     98/100     NonOverlappingTemplate
 14  12  12  10   7   6   6   7   9  17  0.191687     98/100     NonOverlappingTemplate
 12   5  12   7  13   8  13   9   8  13  0.554420     98/100     NonOverlappingTemplate
  9  13  10   8   9   9   8  16   7  11  0.678686     98/100     NonOverlappingTemplate
 15   9   9  13   9  10  10   4   9  12  0.554420     98/100     NonOverlappingTemplate
 10   8   9  10  10  15   1  14  13  10  0.137282     98/100     NonOverlappingTemplate
  9   7  14   9   6   7   9  15  11  13  0.455937    100/100     NonOverlappingTemplate
 11  11   7   9   9  14   7   7  13  12  0.739918     97/100     NonOverlappingTemplate
  6  15  13   2  10  11   9  13  12   9  0.162606    100/100     NonOverlappingTemplate
  7  13   8  10  13   7   9  15  12   6  0.474986     98/100     NonOverlappingTemplate
 13  10  12   6  10  10  10   6  11  12  0.834308     99/100     NonOverlappingTemplate
 11   9  15   7   9  11  13   6  11   8  0.657933     98/100     NonOverlappingTemplate
  7  10  10  11  12   8  11  13   7  11  0.924076    100/100     NonOverlappingTemplate
 13   9   8   8  12   9   6   9  12  14  0.739918     99/100     NonOverlappingTemplate
  7  11   7  18   9   8  10  10   9  11  0.437274    100/100     NonOverlappingTemplate
  7   8  16  12  11  10   9  13   6   8  0.494392    100/100     NonOverlappingTemplate
  7   8  14   6  15  11   9   6  13  11  0.366918     99/100     NonOverlappingTemplate
 11   7  12  11  11   5  12   9   9  13  0.779188    100/100     NonOverlappingTemplate
 10   7  14   6   9  13   6  15  13   7  0.275709     99/100     NonOverlappingTemplate
  9  14  14   2  11  10   8   9   9  14  0.213309     99/100     NonOverlappingTemplate
 10  12  14  10   6  14  10   9   6   9  0.637119     98/100     OverlappingTemplate
 10   4  16   8   8  15  12   8   8  11  0.224821    100/100     Universal
 15  11   8  14   5   8  11  11  10   7  0.474986     98/100     ApproximateEntropy
  4   9   4   4   4   8   7   5   6   7  0.574903     57/58      RandomExcursions
  7   3   9   5   6   8   8   3   4   5  0.383827     57/58      RandomExcursions
  8   7   4   7   4   6   8   4   4   6  0.699313     58/58      RandomExcursions
  7   3   2  11   9   3   7   2   9   5  0.015598     57/58      RandomExcursions
  7   4   4   7   9   5   8   5   3   6  0.534146     57/58      RandomExcursions
  6   7   8   3  11   3   4   6   4   6  0.191687     58/58      RandomExcursions
  6   4   1   7  11   3   6   3  12   5  0.005762     55/58      RandomExcursions
  5   6   7   3  12   7   7   6   3   2  0.066882     57/58      RandomExcursions
  4   5   7   5   8   8   6   7   4   4  0.739918     58/58      RandomExcursionsVariant
  3   6   8  11   0  11   7   6   2   4  0.002758     58/58      RandomExcursionsVariant
  3   7   7   8  11   4   7   5   4   2  0.108791     58/58      RandomExcursionsVariant
  4   8   8   6  12   3   2   7   2   6  0.023545     58/58      RandomExcursionsVariant
  6   5   9   8   3   9   4   2   7   5  0.213309     58/58      RandomExcursionsVariant
  5   7   6   7   5   6   2   7   8   5  0.699313     58/58      RandomExcursionsVariant
  4   6  10   6   4   4   8   8   3   5  0.319084     57/58      RandomExcursionsVariant
  4   5   9   7   9   6   2   9   4   3  0.137282     58/58      RandomExcursionsVariant
  4   8   7   8  11   3   7   3   5   2  0.066882     58/58      RandomExcursionsVariant
  9   8  12   5   3   1   8   5   5   2  0.007694     57/58      RandomExcursionsVariant
 12   3   8   3   4   3   7   7   5   6  0.066882     55/58      RandomExcursionsVariant
 10   3   7   5   5   5   8   5   4   6  0.455937     57/58      RandomExcursionsVariant
  7   5   4  10   8   7   5   6   3   3  0.319084     57/58      RandomExcursionsVariant
  4   6  10   9   8   5   6   3   4   3  0.191687     57/58      RandomExcursionsVariant
  5   8   9   6   5   6   6   5   7   1  0.383827     57/58      RandomExcursionsVariant
  8   5   4  13   1   9   5   7   4   2  0.004301     58/58      RandomExcursionsVariant
  7   7   3   9   6   5   7   5   4   5  0.657933     57/58      RandomExcursionsVariant
  7   6   3   6   8   9   4   7   6   2  0.350485     57/58      RandomExcursionsVariant
 16   6  11  13   6   9  10  13   7   9  0.366918     99/100     Serial
 10  13  13   7   7  13   9  11   7  10  0.779188    100/100     Serial
 13   3   7  15  14   7  15  10  11   5  0.051942     98/100     LinearComplexity


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
The minimum pass rate for each statistical test with the exception of the
random excursion (variant) test is approximately = 96 for a
sample size = 100 binary sequences.

The minimum pass rate for the random excursion (variant) test
is approximately = 55 for a sample size = 58 binary sequences.

For further guidelines construct a probability table using the MAPLE program
provided in the addendum section of the documentation.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

```

## Sposób wprowadzania danych do ciągu losowego

Poniższy skrypt używa... 

```python
from ortools.sat.python import cp_model

def find_golomb_ruler(order, max_length):
    model = cp_model.CpModel()
    marks = [model.NewIntVar(0, max_length, f"m_{i}") for i in range(order)]
    for i in range(order - 1):
        model.Add(marks[i] < marks[i + 1])
    model.Add(marks[0] == 0)
    diffs = []
    for i in range(order):
        for j in range(i):
            d = model.NewIntVar(1, max_length, f"d_{i}_{j}")
            model.Add(d == marks[i] - marks[j])
            diffs.append(d)
    model.AddAllDifferent(diffs)
    model.Minimize(marks[-1])
    solver = cp_model.CpSolver()
    status = solver.Solve(model)
    if status in (cp_model.OPTIMAL, cp_model.FEASIBLE):
        return [solver.Value(m) for m in marks]
    return None

def read_binary_file_as_bits(filename):
    with open(filename, "rb") as f:
        byte_data = f.read()
    bits = []
    for byte in byte_data:
        bits.extend([(byte >> i) & 1 for i in reversed(range(8))])
    return bits

def bits_to_bytes(bits):
    return bytes(int(''.join(map(str, bits[i:i+8])), 2) for i in range(0, len(bits), 8))

def xor_with_golomb_mask(bits, block_size, golomb, max_segments=None):
    output = bits[:]
    num_blocks = len(bits) // block_size
    segment_limit = min(max_segments if max_segments is not None else num_blocks, num_blocks)

    for i in range(segment_limit):
        block_start = i * block_size
        for g in golomb:
            idx = block_start + g
            if idx < len(bits):
                output[idx] ^= 1
    return output

def calculate_modified_percent(file_bites, golomb_order, max_segments):
    modified_bits = golomb_order * max_segments
    return (modified_bits / file_bites) * 100

def process_file(input_file, output_file, block_size, golomb_order, max_segments=None):
    bits = read_binary_file_as_bits(input_file)
    max_length = block_size - 1
    max_possible_segments = len(bits) // block_size

    if max_segments is None:
        max_segments = max_possible_segments

    if max_segments > max_possible_segments:
        raise ValueError(
            f"Plik ma tylko {max_possible_segments} segmentów przy block_size={block_size}, "
            f"a próbujesz zmodyfikować {max_segments} segmentów."
        )

    percent = calculate_modified_percent(len(bits), golomb_order, max_segments)
    print(f"Modified: {percent:.6f}% bitów")

    golomb = find_golomb_ruler(golomb_order, max_length)
    print(f"Using Golomb ruler: {golomb}")

    modified_bits = xor_with_golomb_mask(bits, block_size, golomb, max_segments)
    with open(output_file, "wb") as f:
        f.write(bits_to_bytes(modified_bits))

block_size=800
golomb_order=4
max_segments=None

process_file("TRNG_P.bit", "output_modified.bit", block_size=block_size, golomb_order=golomb_order, max_segments=max_segments)
```

## Wnioski

Bla bla bla...