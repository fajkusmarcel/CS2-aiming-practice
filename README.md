# CS2 training
Nastroje a užitečné konfigurace pro CS2 pro zvýšení skillu ve hře Counter Strike 2.
 

## Aiming Practice Web App
Zdrojový kód webové javascriptové aplikace pro trénování sledování pohybujícího cíle v herním poli pomocí myši nebo trénování rychlosti a přesnosti klikání (střílení) na cíl.


## CS2 Training Configurations
Konfiguraci uložte do souboru se specifickým názvem a soubor uložte do adresáře TODO. Ve hře spusťte konzoli a zadejte příkaz 

```
exec cfg_file_name
```

### DEATHMATCH 1xT vs 8xCT

Tato konfigurace je určena pro deathmatch trénink, kde se jeden hráč (T) postaví proti osmi botům s maximální obtiznosti, kteří mohou střílet (CT).  Nastaví startovní peníze na 65535, aby hráč měl dostatek prostředků. Délka kola je nastavena na 60 minut, což umožňuje delší trénink bez přerušení. Konfigurace zahrnuje okamžitý respawn po smrti všech botů i samotného hráče, což zajišťuje nepřetržitou hru. Hráč dostává AWP a má nekonečné množství munice, což je ideální pro procvičování střelby s touto zbraní.


```
sv_cheats 1; mp_limitteams 0; mp_autoteambalance 0; bot_kick; mp_maxmoney 65535; mp_startmoney 65535; mp_afterroundmoney 65535; mp_roundtime_defuse 60; mp_roundtime 60; mp_restartgame 1; mp_respawn_on_death_ct 1; mp_respawn_on_death_t 1; mp_ignore_round_win_conditions 1; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_difficulty 3; bot_dont_shoot 0; give weapon_awp; sv_infinite_ammo 1
```

### BOMB 1xT vs 8xCT

Tato konfigurace je podobná předchozí, ale zaměřuje se na trénink v módu bomb, kde se jeden hráč (T) snaží umístit bombu proti osmi botům s nejvyšší obtížností (CT). Peníze jsou nastaveny na maximum pro start a po každém kole, což umožňuje hráči koupit jakoukoliv výbavu. Kolo trvá 60 minut, což poskytuje dostatek času na procvičování. Hráč dostává AWP a má nekonečnou munici. Tato konfigurace je ideální pro nácvik umisťování bomby a střetů s vyšším počtem protivníků.

```
sv_cheats 1; mp_limitteams 0; mp_autoteambalance 0; bot_kick; mp_maxmoney 65535; mp_startmoney 65535; mp_afterroundmoney 65535; mp_roundtime_defuse 60; mp_roundtime 60; mp_restartgame 1;  bot_add_ct;bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_difficulty 3; give weapon_awp; sv_infinite_ammo 1 
```

### Universal training
Tato konfigurace je určena pro obecný trénink ve hře.  Startovní peníze jsou nastaveny na 16000, což umožňuje hráči koupit jakoukoliv výbavu bez omezení. Délka kola je nastavena na 60 minut a doba zmrznutí na začátku kola je zrušena, což zajišťuje okamžitý start. Noclip je bindován na klávesu alt, což umožňuje volný pohyb mapou. Boti jsou zastaveni a mohou být umístěni na konkrétní pozice pomocí klávesy o. Zobrazení zásahů je možné přepínat klávesou p. Tato konfigurace poskytuje flexibilní prostředí pro různé tréninkové scénáře, jako je nacvičování pohybu, umisťování botů na strategické pozice a sledování zásahů pro zlepšení přesnosti střelby.

```
sv_cheats 1;mp_maxmoney 16000;mp_startmoney 16000;mp_roundtime 60;mp_roundtime_defuse 60;mp_roundtime_hostage 60;mp_freezetime 0;bind alt noclip;bot_stop 1;bind o bot_place;bind p "toggle sv_showimpacts 0 1";mp_restartgame 1
```

## CS2 příkazy
* sv_cheats 1**: Povolení cheatovacích příkazů na serveru.

## Nastavení botů
* mp_limitteams 0**: Zrušení limitu na počet hráčů v týmech, což umožňuje nepoměrné rozdělení hráčů mezi týmy.
* mp_autoteambalance 0**: Vypnutí automatického vyvažování týmů.
* bot_kick**: Vyhození všech botů ze hry.
* bot_add_t: Přidání bota do T týmu.
* bot_stop 1: Zastavení všech botů na místě. Boti se přestanou pohybovat, což je užitečné pro trénink střelby na stacionární cíle.
* bot_add_ct: Přidání bota do CT týmu.
* bot_difficulty 3**: Nastavení obtížnosti botů na 3 (nejvyšší obtížnost).
* bot_dont_shoot 0**: Povolení botům střílet (nastavení na 0 znamená, že mohou střílet).
* mp_teammates_are_enemies 1: Tento příkaz umožňuje, aby spoluhráči byli považováni za nepřátele, což je užitečné pro trénink střelby a reakčních časů ve smíšených týmech.

## Nastavení herního času a peněz 
* mp_roundtime_defuse 60**: Nastavení délky kola pro defuse mapy na 60 minut.
* mp_roundtime 60**: Nastavení délky kola na 60 minut.
* mp_roundtime_hostage 60: Nastavení délky kola pro hostage mapy (mapy, kde musí CT zachránit rukojmí) na 60 minut.
* mp_freezetime 0: Nastavení času zmrazení (freezetime) na začátku kola na 0 sekund, což znamená, že kolo začne okamžitě bez čekací doby

**mp_respawn_on_death_ct 1**: Povolení respawnu CT hráčů po smrti.
* mp_respawn_on_death_t 1**: Povolení respawnu T hráčů po smrti.
* mp_restartgame 1**: Restartování hry po 1 sekundě.
* mp_maxmoney 65535**: Nastavení maximální možné částky peněz pro hráče na 65535.
* mp_startmoney 65535**: Nastavení startovních peněz pro hráče na 65535.
* mp_afterroundmoney 65535**: Nastavení peněz, které hráči obdrží po každém kole, na 65535

## Nastavení zbraní a munice
* give weapon_ak47: Dát hráči zbraň AK-47.
* give weapon_m4a1: Dát hráči zbraň M4A1.
* give weapon_awp: Dát hráči zbraň AWP.
* sv_infinite_ammo 1**: Povolení nekonečného množství munice.
* bind g "give weapon_hegrenade;give weapon_flashbang;give weapon_smokegrenade;give weapon_molotov;give weapon_decoy": Připojení příkazů pro získání všech typů granátů k klávese "G". Tímto způsobem můžeš rychle získat granáty pro trénink.

## Vizualizace a trajektorie
* sv_grenade_trajectory 1: Zobrazuje trajektorii hozených granátů, což je užitečné pro trénink přesného házení granátů.
* sv_grenade_trajectory_time 10: Nastavuje dobu (v sekundách), po kterou je zobrazena trajektorie granátu. Tento příkaz je užitečný pro analýzu a přizpůsobení hodu granátu.

## Feautures
* bind alt noclip: Připojení příkazu "noclip" k klávese "Alt". "Noclip" umožňuje hráči létat a procházet skrze objekty.bot_stop 1: Zastavení všech botů na místě. Boti se přestanou pohybovat
* bind o bot_place: Připojení příkazu "bot_place" k klávese "O". Tento příkaz umístí bota na pozici, kde se právě nachází hráč
* bind p "toggle sv_showimpacts 0 1": Připojení příkazu k klávese "P", který přepíná zobrazení impaktů střel (kde střely zasáhly) mezi zapnutým (1) a vypnutým (0) stavem.




