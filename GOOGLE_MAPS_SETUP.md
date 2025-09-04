# 🗺️ Configuration Google Maps API - Guide Étape par Étape

## 🎯 Objectif
Configurer Google Maps pour afficher les cartes dans votre application Dalil Tounes

## ⚠️ IMPORTANT
Sans Google Maps, les cartes ne s'afficheront pas dans votre application !

---

## 🚀 ÉTAPE 1 : Accès à Google Cloud Console

### Action à faire MAINTENANT :

1. **Ouvrez un nouvel onglet** et allez sur : https://console.cloud.google.com/
2. **Connectez-vous** avec votre compte Google (Gmail)
3. **Acceptez** les conditions d'utilisation si demandé

---

## 🆕 ÉTAPE 2 : Création du projet

### 2.1 Créer un nouveau projet :

1. **En haut de la page**, cliquez sur **"Sélectionner un projet"**
2. **Cliquez sur "Nouveau projet"**
3. **Nom du projet** : `dalil-tounes-maps`
4. **Laissez** l'organisation par défaut
5. **Cliquez sur "Créer"**

⏱️ **Temps d'attente** : 30 secondes à 1 minute

### 2.2 Sélectionner le projet :
Une fois créé, **assurez-vous que votre projet est sélectionné** en haut de la page.

---

## 🔌 ÉTAPE 3 : Activation des APIs (TRÈS IMPORTANT)

### Vous devez activer 3 APIs une par une :

#### 3.1 Maps JavaScript API
1. **Cliquez sur ce lien** : https://console.cloud.google.com/apis/library/maps-backend.googleapis.com
2. **Cliquez sur "ACTIVER"**
3. **Attendez** le message de confirmation

#### 3.2 Places API
1. **Cliquez sur ce lien** : https://console.cloud.google.com/apis/library/places-backend.googleapis.com
2. **Cliquez sur "ACTIVER"**
3. **Attendez** le message de confirmation

#### 3.3 Geocoding API
1. **Cliquez sur ce lien** : https://console.cloud.google.com/apis/library/geocoding-backend.googleapis.com
2. **Cliquez sur "ACTIVER"**
3. **Attendez** le message de confirmation

✅ **Vérification** : Vous devriez voir "API activée" pour les 3 APIs

---

## 🔑 ÉTAPE 4 : Création de la clé API

### 4.1 Accès aux identifiants :
1. **Allez sur** : https://console.cloud.google.com/apis/credentials
2. **Cliquez sur "Créer des identifiants"**
3. **Sélectionnez "Clé API"**

### 4.2 Copie de la clé :
1. **Une popup s'ouvre** avec votre clé API
2. **Copiez la clé** (commence par `AIza...`)
3. **Sauvegardez-la** dans un fichier texte temporaire

**Exemple de clé** : `
AIzaSyANJrHS7OFU12UiLgtPIliTGgVVNrQKTug`
---

## 🔒 ÉTAPE 5 : Sécurisation de la clé (OBLIGATOIRE)

### 5.1 Configuration des restrictions :
1. **Dans la popup**, cliquez sur **"RESTREINDRE LA CLÉ"**
2. **Ou allez dans** : https://console.cloud.google.com/apis/credentials

### 5.2 Restrictions d'application :
1. **Sélectionnez** "Référents HTTP (sites web)"
2. **Ajoutez ces domaines** (un par ligne) :
   ```
   http://localhost:*
   https://localhost:*
   https://*.netlify.app/*
   https://*.netlify.com/*
   ```
3. **Si vous avez un domaine personnalisé**, ajoutez aussi :
   ```
   https://votre-domaine.com/*
   ```

### 5.3 Restrictions d'API :
1. **Sélectionnez** "Restreindre la clé"
2. **Cochez ces 3 APIs** :
   - ✅ Maps JavaScript API
   - ✅ Places API
   - ✅ Geocoding API

### 5.4 Sauvegarde :
**Cliquez sur "ENREGISTRER"**

---

## 📋 ÉTAPE 6 : Vérification

### Checklist de vérification :
- [ ] Projet Google Cloud créé
- [ ] 3 APIs activées (Maps JavaScript, Places, Geocoding)
- [ ] Clé API créée et copiée
- [ ] Restrictions d'application configurées
- [ ] Restrictions d'API configurées
- [ ] Clé sauvegardée dans un fichier sécurisé

---

## 💰 ÉTAPE 7 : Information sur la facturation

### 7.1 Crédit gratuit :
- **Google offre 200$ de crédit gratuit** par mois
- **C'est largement suffisant** pour un site comme le vôtre
- **Pas de frais** pour un usage normal

### 7.2 Configuration de la facturation (si demandé) :
1. **Allez dans** : https://console.cloud.google.com/billing
2. **Ajoutez une carte de crédit** (pour la vérification)
3. **Activez la facturation** sur votre projet

⚠️ **Rassurez-vous** : Avec le crédit gratuit, vous ne paierez rien !

---

## 🎯 PROCHAINE ÉTAPE

Une fois que vous avez **votre clé API Google Maps copiée et sécurisée**, dites-moi :

**"Clé Google Maps prête : AIzaSy..."** (collez votre vraie clé)

Et nous passerons à la mise à jour de votre fichier .env !

---

## 🆘 Problèmes courants

**"Projet non sélectionné" :**
- Vérifiez en haut de la page que votre projet est sélectionné
- Cliquez sur le nom du projet pour le changer

**"API non trouvée" :**
- Utilisez les liens directs fournis ci-dessus
- Assurez-vous d'être dans le bon projet

**"Erreur de facturation" :**
- Ajoutez une carte de crédit pour la vérification
- Le crédit gratuit couvre largement vos besoins

**"Clé API ne fonctionne pas" :**
- Attendez 5-10 minutes après la création
- Vérifiez les restrictions de domaine

---

**🎯 OBJECTIF : Obtenir votre clé API Google Maps sécurisée**