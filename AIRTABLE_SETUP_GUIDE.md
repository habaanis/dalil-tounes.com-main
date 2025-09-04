# 📊 Configuration Airtable - Guide Complet

## 🎯 Objectif
Connecter votre base de données Airtable à votre application Dalil Tounes pour afficher vos établissements sur la carte.

---

## ✅ ÉTAPE 1 : Préparation de votre base Airtable

### 1.1 Structure de table recommandée

Votre table Airtable doit avoir ces colonnes (noms exacts) :

| Nom de colonne | Type | Description | Obligatoire |
|----------------|------|-------------|-------------|
| `Name` | Single line text | Nom de l'établissement | ✅ |
| `Category` | Single select | Catégorie (hotel, sante, etc.) | ✅ |
| `Subcategory` | Single line text | Sous-catégorie | ✅ |
| `Description` | Long text | Description détaillée | ✅ |
| `Address` | Single line text | Adresse complète | ✅ |
| `Governorate` | Single select | Gouvernorat tunisien | ✅ |
| `Phone` | Phone number | Numéro de téléphone | ✅ |
| `Email` | Email | Adresse email | ❌ |
| `Website` | URL | Site web | ❌ |
| `Image` | URL | URL de l'image | ❌ |
| `Rating` | Number | Note (1-5) | ❌ |
| `ReviewCount` | Number | Nombre d'avis | ❌ |
| `Hours` | Single line text | Horaires d'ouverture | ❌ |
| `Services` | Long text | Services (séparés par virgules) | ❌ |
| `Latitude` | Number | Latitude GPS | ❌ |
| `Longitude` | Number | Longitude GPS | ❌ |
| `Verified` | Checkbox | Établissement vérifié | ❌ |
| `Premium` | Checkbox | Établissement premium | ❌ |

---

## ✅ ÉTAPE 2 : Récupération des clés API Airtable

### 2.1 Accès à votre compte Airtable
1. **Allez sur** : https://airtable.com/account
2. **Connectez-vous** à votre compte
3. **Cliquez sur "Generate API key"** dans la section "API"
4. **Copiez votre clé API** (commence par `key...`)

### 2.2 Récupération de l'ID de base
1. **Allez sur** : https://airtable.com/api
2. **Sélectionnez votre base** (celle qui contient vos établissements)
3. **Copiez l'ID de base** (commence par `app...`)

### 2.3 Nom de la table
- **Nom exact** de votre table dans Airtable (ex: "Establishments", "Établissements", etc.)

---

## ✅ ÉTAPE 3 : Configuration des variables d'environnement

### 3.1 Sur Netlify (PRODUCTION)

1. **Allez sur** : https://app.netlify.com
2. **Votre site** → **Site settings** → **Environment variables**
3. **Ajoutez ces 3 nouvelles variables** :

```
VITE_AIRTABLE_API_KEY = keyXXXXXXXXXXXXXX
VITE_AIRTABLE_BASE_ID = appXXXXXXXXXXXXXX
VITE_AIRTABLE_TABLE_NAME = Establishments
```

4. **Redéployez** : Deploys → Trigger deploy → Deploy site

### 3.2 Localement (DÉVELOPPEMENT)

Ajoutez à votre fichier `.env` :

```env
# Airtable Configuration
VITE_AIRTABLE_API_KEY=keyXXXXXXXXXXXXXX
VITE_AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
VITE_AIRTABLE_TABLE_NAME=Establishments
```

---

## ✅ ÉTAPE 4 : Test de la configuration

### 4.1 Test local
```bash
npm run dev
```

**Vérifiez** :
- ✅ Message "Chargement des établissements depuis Airtable..."
- ✅ Vos établissements apparaissent sur la carte
- ✅ Pas d'erreurs dans la console (F12)

### 4.2 Test en production
1. **Ouvrez** : https://www.dalil-tounes.com
2. **Vérifiez** que vos données Airtable s'affichent
3. **Testez** la recherche et les filtres

---

## 🗺️ ÉTAPE 5 : Optimisation des coordonnées GPS

### 5.1 Ajout des coordonnées dans Airtable

Pour chaque établissement, ajoutez :
- **Latitude** : Coordonnée Nord-Sud (ex: 36.8065)
- **Longitude** : Coordonnée Est-Ouest (ex: 10.1815)

### 5.2 Comment obtenir les coordonnées ?

1. **Google Maps** : Clic droit sur l'emplacement → Copier les coordonnées
2. **GPS Coordinates** : https://www.gps-coordinates.net/
3. **Batch Geocoding** : Pour plusieurs adresses à la fois

---

## 📋 Checklist de vérification

- [ ] Table Airtable avec les bonnes colonnes
- [ ] Clé API Airtable récupérée
- [ ] ID de base Airtable récupéré
- [ ] Variables ajoutées sur Netlify
- [ ] Site redéployé
- [ ] Test local réussi
- [ ] Test production réussi
- [ ] Coordonnées GPS ajoutées (optionnel)

---

## 🎯 RÉSULTAT FINAL

Votre site affichera :
- ✅ **Vos vrais établissements** depuis Airtable
- ✅ **Carte interactive** avec tous vos points
- ✅ **Recherche** dans vos données
- ✅ **Filtres** sur vos établissements
- ✅ **Suggestions** ajoutées directement à Airtable
- ✅ **Synchronisation automatique**

---

## 🆘 Dépannage

### "Erreur de connexion Airtable"
- Vérifiez vos clés API
- Vérifiez le nom exact de votre table
- Vérifiez que la base est accessible

### "Aucun établissement affiché"
- Vérifiez que votre table contient des données
- Vérifiez les noms des colonnes (sensible à la casse)
- Regardez la console pour les erreurs

### "Coordonnées incorrectes"
- Vérifiez le format : Latitude (36.8065), Longitude (10.1815)
- Utilisez des points (.) pas des virgules (,)

---

**🚀 Votre site sera connecté à votre vraie base de données Airtable !**